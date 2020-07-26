import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { loadAllProfiles } from '../dashboard.actions';
import { Store } from '@ngrx/store';
import { DashboardState } from '../reducers';
import { tap, first, finalize } from 'rxjs/operators';

@Injectable()
export class ProfilesResolver implements Resolve<any>{
    loading = false;
    constructor(private store: Store<DashboardState>){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.pipe(
            tap(() => {
                if(!this.loading){
                   this.loading = true;
                   this.store.dispatch(loadAllProfiles());
                }
            }),
            first(),
            finalize(() => {
                this.loading = false;
            })
        )
    }
}