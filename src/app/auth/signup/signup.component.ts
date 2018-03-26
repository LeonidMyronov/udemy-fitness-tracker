import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

import { AuthData } from '../auth-data.model';

@Component({
  selector: 'ft-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
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
