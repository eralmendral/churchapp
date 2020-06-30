import { User } from './../../interfaces/dashboard/User';
import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
    "[User Page] Add User",
    props<{user : User}>()
)

export const removeUser = createAction(
    "[User Page] Remove User",
    props<{user : User}>()
)