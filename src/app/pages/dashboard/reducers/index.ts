import {
  ActionReducer,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { DashboardActions } from '../dashboard.actiontypes';
import { User } from 'src/app/interfaces/dashboard/User';
export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  users: User[];
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
//   router: routerReducer
// };

export const dashboardReducer = createReducer<DashboardState>(
  initialDashboardState,
  on(DashboardActions.allUsersLoaded, (state, action) => {
    return { 
      ...state,
      users: action.users
    }
  }),
  on(DashboardActions.allProfilesLoaded, (state, action) => {
    return { 
      ...state,
      profiles: action.profiles
    }
  }),
  on(DashboardActions.allNetworksLoaded, (state, action) => {
    return { 
      ...state,
      networks: action.networks
    }
  }),
  on(DashboardActions.allCellgroupsLoaded, (state, action) => {
    return { 
      ...state,
      cellgroups: action.cellgroups
    }
  }),
)

export function logger(reducer: ActionReducer<any>) : ActionReducer<any> {
  return (state, action) => {
    console.log("state before:", state);
    console.log("action:", action);
    return reducer(state, action);
  }
}
export const metaReducers: MetaReducer<DashboardState>[] = !environment.production ? [logger] : [];


