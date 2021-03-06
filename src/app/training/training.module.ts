import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingRoutingModule } from './training-routing.module';

import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { trainingReducer } from './training.reducer';

@NgModule({
  declarations: [
    TrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    CurrentTrainingComponent,
    StopTrainingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TrainingRoutingModule,
    StoreModule.forFeature('training', trainingReducer)
  ],
  exports: [

  ],
  entryComponents: [
    StopTrainingComponent
  ]
})

export class TrainingModule {}
