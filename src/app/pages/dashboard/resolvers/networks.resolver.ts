import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { tap, first, finalize } from 'rxjs/operators';
import {  loadAllNetworks } from '../dashboard.actions';

@Injectable()
export class NetworksResolver implements Resolve<any> {
    loading = false;
    constructor(private store: Store<AppState>) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if(!this.loading){
                    this.loading = true;
                    this.store.dispatch(loadAllNetworks());
                }
        }),
        first(),
        finalize(() => this.loading = false)  
        )
    }
}