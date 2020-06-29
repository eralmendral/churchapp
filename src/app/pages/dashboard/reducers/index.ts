import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { DashboardActions } from '../dashboard.actiontypes';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  users: any;
  profiles: any;
  cellgroups: any;
  networks: any;
  vips: any;
}

export const initialDashboardState: DashboardState = {
  users: [],
  profiles: [],
  cellgroups: [],
  networks: [],
  vips: [],
}

// export const reducers: ActionReducerMap<DashboardState> = {

// };

// export const metaReducers: MetaReducer<DashboardState>[] = !environment.production ? [] : [];


export const dashboardReducer = createReducer<DashboardState>(
  initialDashboardState,
  on(DashboardActions.addUser, (state, action) => {
    return {
      users: [...state.users, action.user]
    }
  })
)