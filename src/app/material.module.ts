import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatListModule],
  exports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatListModule],
})

export class MaterialModule {}

