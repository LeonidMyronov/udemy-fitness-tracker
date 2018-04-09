import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_EXERCISES = '[Training] SET_AVAILABLE_EXERCISES';
export const SET_FINISHED_EXERCISES = '[Training] SET_FINISHED_EXERCISES';
export const START_TRAINING = '[Training] START_TRAINING';
export const STOP_TRAINING = '[Training] STOP_TRAINING';

export class SetAvailableExercises implements Action {
  readonly type = SET_AVAILABLE_EXERCISES;
  constructor(public payload: Exercise[]) { }
}

export class SetFinishedExercises implements Action {
  readonly type = SET_FINISHED_EXERCISES;
  constructor(public payload: Exercise[]) { }
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;
  constructor(public payload: Exercise) { }
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions = SetAvailableExercises | SetFinishedExercises | StartTraining | StopTraining;
