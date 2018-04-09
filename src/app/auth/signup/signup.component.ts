import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';

import { AuthData } from '../auth-data.model';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'ft-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  isLoading$: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      date: new FormControl(new Date(), [Validators.required]),
      agree: new FormControl(false, [Validators.pattern('true')])
    });
  }

  onSubmit() {
    const authData: AuthData = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.signup(authData);
  }

}
