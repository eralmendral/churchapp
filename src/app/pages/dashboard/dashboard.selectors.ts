import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from './reducers';

export const selectDashboardState = createFeatureSelector<DashboardState>("dashboard");

export const selectUsers = createSelector(
    selectDashboardState,
    dashboard => dashboard.users
)

export const profiles = createSelector(
    selectDashboardState,
    dashboard => dashboard.profiles
)

export const selectNetworks = createSelector(
    selectDashboardState,
    dashboard => dashboard.networks
)

export const cellgroups = createSelector(
    selectDashboardState,
    dashboard => dashboard.cellgroups
)


