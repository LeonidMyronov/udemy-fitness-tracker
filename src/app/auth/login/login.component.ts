import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'ft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store: Store<{ui: fromApp.State}>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.map(state => state.ui.isLoading);

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    const authData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(authData);
  }
}
