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
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardhomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'networks', component: NetworksComponent },
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
