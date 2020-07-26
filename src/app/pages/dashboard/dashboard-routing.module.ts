import { SetuserComponent } from './pages/users/subpages/setuser/setuser.component';
import { UserslistComponent } from './pages/users/subpages/userslist/userslist.component';
import { DashboardhomeComponent } from './pages/dashboardhome/dashboardhome.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EventsComponent } from './pages/events/events.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { TrainingComponent } from './pages/training/training.component';
import { VipsComponent } from './pages/vips/vips.component';
import { CellgroupComponent } from './pages/cellgroup/cellgroup.component';
import { NetworksComponent } from './pages/networks/networks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent, } from './pages/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworklistComponent } from './pages/networks/subpages/networklist/networklist.component';
import { AddnetworkComponent } from './pages/networks/subpages/addnetwork/addnetwork.component';
import { EditnetworkComponent } from './pages/networks/subpages/editnetwork/editnetwork.component';
import { ViewnetworkComponent } from './pages/networks/subpages/viewnetwork/viewnetwork.component';
import { UsersResolver } from './resolvers/users.resolver';
import { NetworkResolver } from './resolvers/networks.resolver';
import { CellgroupResolver } from './resolvers/cellgroups.resolver';
import { UserinfoComponent } from './pages/users/subpages/userinfo/userinfo.component';
import { UserResolver } from './resolvers/user.resolver';
import { ProfileResolver } from './resolvers/profile.resolver';
import { ProfilesResolver } from './resolvers/profiles.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      users: UsersResolver,
      networks: NetworkResolver,
      cellgroups: CellgroupResolver,
      profiles: ProfilesResolver
    },
    children: [
      { path: '', component: DashboardhomeComponent },
      { 
        path: 'users', 
        component: UsersComponent,
        children: [
        {
          path: '', component: UserslistComponent
        },
        {
          path: 'add', component: SetuserComponent
        },
        {
          path: 'edit/:userId', component: SetuserComponent, resolve : { userData: UserResolver, userProfile: ProfileResolver }
        },
        {
          path: 'view/:userId', component: UserinfoComponent
        }
      ] 
      },
      { path: 'networks', component: NetworksComponent, 
        children: [
          {
            path: '', component: NetworklistComponent
          },
          {
            path: 'add', component: AddnetworkComponent
          },
          {
            path: 'edit/:networkid', component: EditnetworkComponent
          },
          {
            path: 'view/:networkid', component: ViewnetworkComponent
          }
        ] 
      },
      { path: 'cellgroups', component: CellgroupComponent },
      { path: 'vips', component: VipsComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'bookings', component: BookingComponent },
      { path: 'events', component: EventsComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule { }
