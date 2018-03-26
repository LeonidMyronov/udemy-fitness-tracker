import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  signup(authData: AuthData) {
    console.log('signup authData: ', authData);
    this.user = {
      email: authData.email,
      userId: (Math.random() * 1000).toString()
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    console.log('login authData: ', authData);
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth(): boolean {
    return !!this.user;
  }
}
