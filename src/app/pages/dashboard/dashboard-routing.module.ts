import { UserslistComponent } from './users/subpages/userslist/userslist.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { SettingsComponent } from './settings/settings.component';
import { EventsComponent } from './events/events.component';
import { BookingComponent } from './booking/booking.component';
import { ReportsComponent } from './reports/reports.component';
import { TrainingComponent } from './training/training.component';
import { VipsComponent } from './vips/vips.component';
import { CellgroupComponent } from './cellgroup/cellgroup.component';
import { NetworksComponent } from './networks/networks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent, } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './users/subpages/adduser/adduser.component';
import { EdituserComponent } from './users/subpages/edituser/edituser.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NetworklistComponent } from './networks/subpages/networklist/networklist.component';
import { AddnetworkComponent } from './networks/subpages/addnetwork/addnetwork.component';
import { EditnetworkComponent } from './networks/subpages/editnetwork/editnetwork.component';
import { ViewnetworkComponent } from './networks/subpages/viewnetwork/viewnetwork.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
          path: 'add', component: AdduserComponent
        },
        {
          path: 'edit/:userId', component: EdituserComponent
        },
        {
          path: 'view/:userId', component: EdituserComponent
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
