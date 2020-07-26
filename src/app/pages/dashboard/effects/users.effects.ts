import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { DashboardActions } from '../dashboard.actiontypes';
import { createEffect, ofType, Actions, } from '@ngrx/effects';
import { concatMap, map, tap, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { allUsersLoaded, userAdded, userUpdated } from '../dashboard.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UsersEffects {


    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.loadAllUsers, DashboardActions.userUpdated),
            concatMap(action => this.userService.fetchusers()),
            map(users => allUsersLoaded({ users }))
        )
    )

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.updateUser),
            concatMap((user: any) => {
                return this.afs.collection('users').doc(user.id).set(user).then(() => {
                    this.router.navigate(['users']);
                    this.toastr.success('User Updated!');
                    return userUpdated()
                })
            }),
        ),
    )

    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.addUser),
            concatMap((user: any) => {
                console.log('debug user')
                return this.afs.collection('users').doc(user.id).set(user).then(() => {
                    this.router.navigate(['users']);
                    this.toastr.success('User Added!');
                    return userAdded({ user: user })
                })
            }),
        )
    )

    constructor(private actions$: Actions, private userService: UsersService,
        private afs: AngularFirestore,
        private router: Router,
        private toastr: ToastrService) { }
}