import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private readonly route: Router) {
  }

  signOut() {
    localStorage.removeItem("token")
    this.route.navigateByUrl("")
  }
}
