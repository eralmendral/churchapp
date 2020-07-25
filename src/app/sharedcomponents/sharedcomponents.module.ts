import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { ToastrModule } from 'ngx-toastr';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { IconsProviderModule } from '../icons-provider.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    DashboardNavComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(), 
  ],
  exports: [
    DashboardNavComponent,
    ToastrModule,
    NgSelectModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzDatePickerModule,
    NzSelectModule,
    NzButtonModule,
    NzDividerModule,
    NzBreadCrumbModule
  ],
  providers: [NzModalService]
})
export class SharedComponentsModule { }
