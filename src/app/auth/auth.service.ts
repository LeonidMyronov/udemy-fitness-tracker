import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';

import { TrainingService } from '../training/training.service';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private trainingService: TrainingService,
    private afAuth: AngularFireAuth
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(
      state => {
        if (state) {
          this.onSuccessAuth();
        } else {
          this.trainingService.cancelSubscription();
          this.isAuthenticated = false;
          this.authChange.next(false);
          this.router.navigate(['/']);
        }
      }
    );
  }

  signup(authData: AuthData) {
    console.log('signup authData: ', authData);
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  onSuccessAuth() {
    this.router.navigate(['/training']);
    this.authChange.next(true);
    this.isAuthenticated = true;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }

}
