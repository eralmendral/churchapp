import { User } from './../../interfaces/dashboard/User';
import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
    "[User Page] Add User",
    props<{user : any}>()
)

export const userAdded = createAction(
    "[User Effect] User Added",
    props<{user : any}>()
)

export const addProfile = createAction(
    "[User Page] Add User Profile",
    props<{profile: any}>()
)

export const profileAdded = createAction(
    "[User Effect] Profile Added",
    props<{profile: any}>()
)

export const removeUser = createAction(
    "[User Page] Remove User",
    props<{user : User}>()
)

export const loadAllUsers = createAction(
    "[User Resolver] Load All Users",
)

export const allUsersLoaded = createAction(
    "[Load Users Effect] All Users Loaded",
    props<{users: any[]}>()
)

export const loadAllNetworks = createAction(
    "[Network Resolver] Load All Networks",
)

export const allNetworksLoaded = createAction(
    "[Load Networks Effect] All Networks Loaded",
    props<{networks: any[]}>()
)

export const loadAllCellgroups = createAction(
    "[Cellgroup Resolver] Load All Cellgroups",
)

export const allCellgroupsLoaded = createAction(
    "[Load Cellgroups Effect] All Cellgroups Loaded",
    props<{cellgroups: any[]}>()
)

