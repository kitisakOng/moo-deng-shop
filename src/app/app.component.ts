import { Component } from '@angular/core';
import { AuthService } from './security/auth.service';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moo-deng-shop';
  isVisible = true
  isPopMenu = false
  email: string = ""
  password: string = ""
  footer = null
  isRegister = false
  isSubmit = false

  modelContentStyle = {
    height: '700px'
  }

  constructor(private readonly authService: AuthService, private readonly message: NzMessageService) {
  }

  ngOnInit() {
    let token = localStorage.getItem("token")
    if (token) {
      this.isVisible = false
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  toggleIsRegister(loginForm: NgForm): void {
    this.isRegister = !this.isRegister
    // this.email = ""
    // this.password = ""
    let controls = loginForm.controls
    let keys = Object.keys(controls)
    keys.forEach(k => {
      controls[k].reset()
    })
  }

  submitForm(loginForm: NgForm) {
    console.log("Submit")
    let controls = loginForm.controls
    let keys = Object.keys(controls)
    keys.forEach(k => {
      controls[k].markAsDirty()
      controls[k].markAsTouched()
      controls[k].updateValueAndValidity()
    })

    if (loginForm.valid) {
      this.isSubmit = true
      if (this.isRegister) {
        this.authService.signUp(this.email, this.password).subscribe({
          next: data => {
            this.signIn()
          }, error: err => {
            this.isSubmit = false
          }
        })
      } else {
        this.signIn()
      }
    }
  }

  signOut() {
    localStorage.removeItem("token")
    this.isVisible = true
    this.isPopMenu = false
    this.message.success("Sign out Success")
  }

  private signIn() {
    this.authService.signIn(this.email, this.password).subscribe({
      next: data => {
        this.isVisible = false
        this.isSubmit = false
        localStorage.setItem("token", data.token)
      }, error: err => {
        this.isSubmit = false
      }
    })
  }
}
