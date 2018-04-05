import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthModule } from './auth/auth.module';
import { NavigationModule } from './navigation/navigation.module';

import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { environment } from '../environments/environment';
import { appReducer } from './app.reducer';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NavigationModule,
    AuthModule,
    StoreModule.forRoot({ui: appReducer})
  ],
  providers: [AuthService, TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
