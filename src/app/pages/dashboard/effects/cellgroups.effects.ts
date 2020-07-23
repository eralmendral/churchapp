import { concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DashboardActions } from '../dashboard.actiontypes';

import {  allCellgroupsLoaded,  } from '../dashboard.actions';
import { CellgroupService } from '../services/cellgroups.service';

@Injectable()
export class CellgroupEffects {
    
    loadCellgroups$ = createEffect(() =>
                this.actions$.pipe(
                    ofType(DashboardActions.loadAllCellgroups), 
                    concatMap(action => this.cellgroupService.fetchCellgroups()),
                    map(cellgroups => allCellgroupsLoaded({ cellgroups }))
            ));

    constructor(private actions$: Actions, private cellgroupService: CellgroupService) {}
}