import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any
}


export const initalAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer<AuthState>(
  initalAuthState,
  on(AuthActions.login, (state, action) => {
   return {
    ...state,
     user: action.user
   }
 }),
 on(AuthActions.logout, (state, action) => {
  return {
    ...state,
    user: undefined
  }
})
)