import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { NetworksComponent } from './networks/networks.component';
import { CellgroupComponent } from './cellgroup/cellgroup.component';
import { VipsComponent } from './vips/vips.component';
import { TrainingComponent } from './training/training.component';
import { ReportsComponent } from './reports/reports.component';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedComponentsModule } from './../../sharedcomponents/sharedcomponents.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './reducers';
import { dashboardReducer } from './reducers';
import { Dashboardfx } from './dashboard.effects';
import { RouterModule } from '@angular/router';
import { NetworksModule } from './networks/networks.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardhomeComponent,
    NetworksComponent,
    CellgroupComponent,
    VipsComponent,
    TrainingComponent,
    ReportsComponent,
    BookingComponent,
    EventsComponent,
    SettingsComponent,
  ],
  imports: [
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NetworksModule,
    DashboardRoutingModule,
    SharedComponentsModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([Dashboardfx])
  ],
  exports: [],
  providers: [],
})
export class DashboardModule { }
