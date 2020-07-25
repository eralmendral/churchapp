import { UsersModule } from './pages/users/users.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardhomeComponent } from './pages/dashboardhome/dashboardhome.component';
import { NetworksComponent } from './pages/networks/networks.component';
import { CellgroupComponent } from './pages/cellgroup/cellgroup.component';
import { VipsComponent } from './pages/vips/vips.component';
import { TrainingComponent } from './pages/training/training.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { BookingComponent } from './pages/booking/booking.component';
import { EventsComponent } from './pages/events/events.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NetworksModule } from './pages/networks/networks.module';

import { SharedComponentsModule } from './../../sharedcomponents/sharedcomponents.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './reducers';
import { Dashboardfx } from './dashboard.effects';
import { RouterModule } from '@angular/router';
import { UsersEffects } from './effects/users.effects';
import { NetworkEffects } from './effects/networks.effects';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';



import { IconsProviderModule } from 'src/app/icons-provider.module';
import { CellgroupEffects } from './effects/cellgroups.effects';
import { CellgroupModule } from './pages/cellgroup/cellgroup.module';

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
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NetworksModule,
    UsersModule,
    CellgroupModule,
    DashboardRoutingModule,
    SharedComponentsModule,
    IconsProviderModule,
    StoreModule.forFeature('dashboard', fromDashboard.dashboardReducer),
    EffectsModule.forFeature([Dashboardfx, UsersEffects, NetworkEffects, CellgroupEffects])
  ],
  exports: [UsersModule],
})
export class DashboardModule { }
