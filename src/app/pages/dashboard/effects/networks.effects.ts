import { concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DashboardActions } from '../dashboard.actiontypes';
import { NetworkService } from '../services/network.service';
import { allNetworksLoaded, networkAdded, networkUpdated,  } from '../dashboard.actions';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NetworkEffects {

    loadNetworks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.loadAllNetworks, DashboardActions.networkUpdated),
            concatMap(action => this.networkService.fetchNetworks()),
            map(networks => allNetworksLoaded({ networks }))
        ));

    addNetwork$ = createEffect(() => this.actions$.pipe(
        ofType(DashboardActions.addNetwork),
        concatMap((network: any) => {
            const id = String(new Date().getTime());
            let networkData = {
                id,
                ...network
            }

            return this.afs.collection('networks').doc(id).set(networkData).then(() => {
                this.router.navigate(['networks']);
                this.toastr.success('Network Added!');
                return networkAdded({ network })
            })
        })
    ))

    updateNetwork$ = createEffect(() => this.actions$.pipe(
        ofType(DashboardActions.updateNetwork),
        concatMap((network: any) => {
            return this.afs.collection('networks').doc(network.id).set(network).then(() => {
                this.toastr.success('Network Updated!');
                return networkUpdated();
            })
        })
    ))

    constructor(private actions$: Actions, private afs: AngularFirestore,
        private networkService: NetworkService,
        private router: Router,
        private toastr: ToastrService) { }
}