import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';


import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {}

  signup(authData: AuthData) {
    console.log('signup authData: ', authData);
    this.user = {
      email: authData.email,
      userId: (Math.random() * 1000).toString()
    };
    this.onSuccessAuth();
  }

  login(authData: AuthData) {
    console.log('login authData: ', authData);
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.onSuccessAuth();
  }

  onSuccessAuth() {
    this.router.navigate(['/training']);
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth(): boolean {
    return !!this.user;
  }
}
