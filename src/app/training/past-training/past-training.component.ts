import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { TrainingService } from '../training.service';

import { Exercise } from '../exercise.model';

@Component({
  selector: 'ft-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.sass']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  public dataSource = new MatTableDataSource<Exercise>();

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getPastExercises();
  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.dataSource.sort = this.sort;
  }

}
