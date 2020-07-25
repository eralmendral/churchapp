import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DashboardState } from '../reducers';
import { first, tap } from 'rxjs/operators';


@Injectable()
export class UserResolver implements Resolve<any> {
    constructor(private store: Store<DashboardState>, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(userData => userData['dashboard'].users.find(users => users.id === route.paramMap.get('userId'))),
            first(),
            tap(userData => {
                if(!userData) {
                    this.router.navigate(['dashboard/users'])
                }
            })
        )
    }
}