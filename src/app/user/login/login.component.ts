import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username: string;
  password: string;
  mouseoverLogin: boolean;

  login(formValues) {
    console.log(formValues);
    this.authService.loginUser(formValues.username, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
