import { addUser } from './../dashboard.actions';
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

  // add user
  on(DashboardActions.userAdded,( state, action) => {
    console.log("DEBUG Reducer userAdded:", action)
    return {
      ...state,
      users: [action.user, ...state.users]
    }
  })
)

export function logger(reducer: ActionReducer<any>) : ActionReducer<any> {
  return (state, action) => {
    console.log("state before:", state);
    console.log("action:", action);
    return reducer(state, action);
  }
}
export const metaReducers: MetaReducer<DashboardState>[] = !environment.production ? [logger] : [];


