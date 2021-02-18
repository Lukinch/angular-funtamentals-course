import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  router: Router;
  firstName: any;
  lastName: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName);
    this.lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: '',
      lastName: '',
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  save(formValue: any) {
    this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);
    this.router.navigate(['events']);
  }
}
