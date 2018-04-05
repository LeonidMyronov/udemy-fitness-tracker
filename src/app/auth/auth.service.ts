import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';

import { TrainingService } from '../training/training.service';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import * as fromRoot from '../app.reducer';
import * as UIAction from '../shared/ui.actions';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private trainingService: TrainingService,
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(
      state => {
        if (state) {
          this.onSuccessAuth();
        } else {
          this.isAuthenticated = false;
          this.authChange.next(false);
          this.router.navigate(['/']);
        }
      }
    );
  }

  signup(authData: AuthData) {
    this.store.dispatch(new UIAction.StartLoading());
    console.log('signup authData: ', authData);
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(response => {
        console.log(response);
        this.store.dispatch(new UIAction.StopLoading());
  })
      .catch(error => {
        console.log(error);
        this.store.dispatch(new UIAction.StopLoading());
      });
  }

  login(authData: AuthData) {
    this.store.dispatch(new UIAction.StartLoading());
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(response => {
      console.log(response);
      this.store.dispatch(new UIAction.StopLoading());
})
    .catch(error => {
      console.log(error);
      this.store.dispatch(new UIAction.StopLoading());
    });
  }

  onSuccessAuth() {
    this.router.navigate(['/training']);
    this.authChange.next(true);
    this.isAuthenticated = true;
  }

  logout() {
    this.trainingService.cancelSubscription();
    this.afAuth.auth.signOut();
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }

}
