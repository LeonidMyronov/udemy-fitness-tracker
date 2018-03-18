import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule],
  exports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule],
})

export class MaterialrModule {}

