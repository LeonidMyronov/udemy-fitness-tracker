import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ft-stop-training',
  template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>Your proggress is {{passedData.progress}} %</mat-dialog-content>
    <mat-dialog-actions>
      <button type="button" mat-raised-button [mat-dialog-close]="true">Yes</button>
      <button type="button" mat-raised-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>

  `
})

export class StopTrainingComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public passedData: any) { }
}
