import { createAction, props } from '@ngrx/store';


export const addUser = createAction(
    "[Users Page] Add User",
    props<{user : any}>()
)

export const removeUser = createAction(
    "[Users Page] Remove User",
    props<{user : any}>()
)