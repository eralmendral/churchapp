import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { DashboardActions } from '../dashboard.actiontypes';
import { createEffect, ofType, Actions, } from '@ngrx/effects';
import { concatMap, map, tap, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { allUsersLoaded, userAdded, userUpdated } from '../dashboard.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from 'angularfire2/storage';

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
                // todo: extract profile_pic and use firebase storage to store image file
                // note: currently profile_pic is stored as data_url
                return this.afs.collection('users').doc(user.id).set(user).then(() => {
                    this.router.navigate(['users']);
                    this.toastr.success('User Updated!');
                    return userUpdated()
                })
            }),
        ),
    )

    uploadImage(event, userId) {
        const file: File = event.target.files[0];
        const filepath = `user_images/${userId}/${file.name}`;
        const task = this.storage.upload(filepath, file);
        task.snapshotChanges().subscribe(console.log);
    }

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
        private storage: AngularFireStorage,
        private router: Router,
        private toastr: ToastrService) { }
}