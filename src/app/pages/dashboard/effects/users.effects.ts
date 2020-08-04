import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { DashboardActions } from '../dashboard.actiontypes';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { concatMap, map, tap, switchMap, concat } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { allUsersLoaded, allProfilesLoaded, userAdded, userUpdated, profileAdded, profileUpdated, userRemoved } from '../dashboard.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class UsersEffects {

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.loadAllUsers, DashboardActions.userUpdated, DashboardActions.userRemoved),
            concatMap(action => this.userService.fetchusers()),
            map(users => allUsersLoaded({ users }))
        )
    )

    loadProfiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.loadAllProfiles),
            concatMap(action => this.userService.fetchProfiles()),
            map(profiles => allProfilesLoaded({ profiles }))
        )
    )


    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.addUser),
            concatMap((action: any) => {
                let user = { ...action.user, isDeleted: false }
                return this.afs.collection('users').doc(action.user.id).set(user).then(() => {
                    this.router.navigate(['users']);
                    this.toastr.success('User Added!');
                    return userAdded()
                })
            })
        )
    )

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.updateUser),
            concatMap((action: any) => {
                // todo: extract profile_pic and use firebase storage to store image file
                // note: currently profile_pic is stored as data_url
                let user = { ...action.user, isDeleted: false }
                return this.afs.collection('users').doc(action.user.id).set(user).then(() => {
                    this.toastr.success('User Updated!');
                    return userUpdated()
                })
            })
        )
    )

    addProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.addProfile),
            concatMap((action: any) => {
                return this.afs.collection('profiles').doc(action.profile.userid).set(action.profile).then(() => {
                    return profileAdded({ profile: action.profile })
                })
            })
        ))

    updateProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.updateProfile),
            concatMap((action: any) => {
                return this.afs.collection('profiles').doc(action.profile.userid).set(action.profile).then(() => {
                    return profileUpdated();
                })
            })
        )
    )

    removeUser$ = createEffect(() => 
    this.actions$.pipe(
        ofType(DashboardActions.removeUser),
        concatMap((action: any) => {
            return this.afs.collection('users').doc(action.userId).set({isDeleted: true}, { merge: true }).then(() => {
                this.toastr.success('User removed!');
                this.router.navigate(['dashboard','users'])
                return userRemoved();
            })
        })
    ))

    constructor(private actions$: Actions, private userService: UsersService,
        private afs: AngularFirestore,
        private storage: AngularFireStorage,
        private router: Router,
        private toastr: ToastrService) { }
}