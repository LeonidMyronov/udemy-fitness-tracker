import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { NavigationModule } from './navigation/navigation.module';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
