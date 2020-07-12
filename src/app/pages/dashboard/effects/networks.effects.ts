import { concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DashboardActions } from '../dashboard.actiontypes';
import { NetworkService } from '../services/network.service';
import { allNetworksLoaded } from '../dashboard.actions';

@Injectable()
export class NetworkEffects {
    
    loadNetworks$ = createEffect(() =>
                this.actions$.pipe(
                    ofType(DashboardActions.loadAllNetworks), 
                    concatMap(action => this.networkService.fetchNetworks()),
                    map(networks => allNetworksLoaded({ networks }))
            ));

    constructor(private actions$: Actions, private networkService: NetworkService) {}
}