import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [
    DashboardNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardNavComponent
  ]
})
export class SharedComponentsModule { }
