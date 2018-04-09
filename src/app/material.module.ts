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
  MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
  MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
  MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule,
MatSnackBarModule],
  exports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
  MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule,
MatSnackBarModule],
})

export class MaterialModule {}

