import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private readonly route: Router, private readonly authService: AuthService) {
  }

  signOut() {
    this.authService.signOut()
    this.route.navigateByUrl("")
  }
}
