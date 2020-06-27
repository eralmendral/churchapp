import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AddUserComponent } from './pages/dashboard/users/components/add-user/add-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { DashboardhomeComponent } from './pages/dashboard/dashboardhome/dashboardhome.component';
import { NetworksComponent } from './pages/dashboard/networks/networks.component';
import { CellgroupComponent } from './pages/dashboard/cellgroup/cellgroup.component';
import { VipsComponent } from './pages/dashboard/vips/vips.component';
import { TrainingComponent } from './pages/dashboard/training/training.component';
import { ReportsComponent } from './pages/dashboard/reports/reports.component';
import { BookingComponent } from './pages/dashboard/booking/booking.component';
import { EventsComponent } from './pages/dashboard/events/events.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    DashboardNavComponent,
    LoginComponent,
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
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
