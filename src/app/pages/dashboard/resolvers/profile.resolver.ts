import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DashboardState } from '../reducers';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';


@Injectable()
export class ProfileResolver implements Resolve<any>{
    constructor(private store: Store<DashboardState>, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(userProfile => userProfile['dashboard'].profiles.find(profiles =>
            profiles.userid === route.paramMap.get('userId'))),
            first()
            )
    }
}