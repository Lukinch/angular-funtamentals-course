import { Injectable } from '@angular/core';
import { IUser } from '../models/user-interface';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'Lucas',
      lastName: 'Farias',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = 'Pepeito';
    this.currentUser.lastName = 'Frog';
  }
}
