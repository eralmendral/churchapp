import { DashboardhomeComponent } from './pages/dashboard/dashboardhome/dashboardhome.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { EventsComponent } from './pages/dashboard/events/events.component';
import { BookingComponent } from './pages/dashboard/booking/booking.component';
import { ReportsComponent } from './pages/dashboard/reports/reports.component';
import { TrainingComponent } from './pages/dashboard/training/training.component';
import { VipsComponent } from './pages/dashboard/vips/vips.component';
import { CellgroupComponent } from './pages/dashboard/cellgroup/cellgroup.component';
import { NetworksComponent } from './pages/dashboard/networks/networks.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgotpass',
    component: UsersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children : [
      { path: '', component: DashboardhomeComponent },
      { path: 'users', component: UsersComponent},
      { path: 'networks', component: NetworksComponent },
      { path: 'cellgroups', component: CellgroupComponent},
      { path: 'vips', component: VipsComponent },
      { path: 'training', component: TrainingComponent},
      { path: 'reports', component: ReportsComponent },
      { path: 'bookings', component: BookingComponent},
      { path: 'events', component: EventsComponent },
      { path: 'settings', component: SettingsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
