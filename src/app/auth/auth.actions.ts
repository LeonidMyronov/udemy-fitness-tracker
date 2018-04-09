import { Action } from '@ngrx/store';

export const IS_AUTHENTICATED = '[AUTH] IS_AUTHENTICATED';
export const IS_UNAUTHENTICATED = '[AUTH] IS_UNAUTHENTICATED';

export class IsAuthenticated implements Action {
  readonly type = IS_AUTHENTICATED;
}

export class IsUnauthenticated implements Action {
  readonly type = IS_UNAUTHENTICATED;
}

export type AuthActions = IsAuthenticated | IsUnauthenticated;

