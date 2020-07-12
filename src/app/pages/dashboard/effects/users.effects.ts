import { Injectable } from '@angular/core';
import { DashboardActions } from '../dashboard.actiontypes';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { concatMap, map} from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { allUsersLoaded } from '../dashboard.actions';

@Injectable()
export class UsersEffects {
    loadUsers$ = createEffect(() => 
       this.actions$.pipe(
        ofType(DashboardActions.loadAllUsers),
        concatMap(action =>  this.userService.fetchusers()),
        map(users => allUsersLoaded({ users }))
       )
    )

    constructor(private actions$: Actions, private userService: UsersService) {}
}