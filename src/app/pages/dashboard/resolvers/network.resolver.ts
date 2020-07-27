import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DashboardState } from '../reducers';
import { first, tap } from 'rxjs/operators';

@Injectable()
export class NetworkResolver implements Resolve<any> {
    constructor(private store: Store<DashboardState>, private router: Router) {   }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.pipe(
            select(stateData => stateData['dashboard'].networks.find(network => network.id === route.paramMap.get('networkId'))),
            first(),
            tap(networkData => {
                if(!networkData) {
                    this.router.navigate(['dashboard/networks'])
                }
            })
        )
    }
}