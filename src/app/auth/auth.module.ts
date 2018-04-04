import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AuthRoutingModule,
    AngularFireAuthModule
  ],
  exports: []
})
export class AuthModule {}
