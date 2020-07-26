import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { GenderRendererComponent } from './aggrid-renderers-components/agrenderer-gender.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CellLeaderRendererComponent } from './aggrid-renderers-components/agrenderer-cellleader.component';
import { ProfilePicRendererComponent } from './aggrid-renderers-components/agrenderer-profilepic.component';

// Ng UI Libs
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../icons-provider.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { NetworkLeaderRendererComponent } from './aggrid-renderers-components/agrenderer-networkleader.component';
@NgModule({
  declarations: [
    DashboardNavComponent,
    BreadcrumbComponent,
    GenderRendererComponent,
    CellLeaderRendererComponent,
    ProfilePicRendererComponent,
    NetworkLeaderRendererComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(), 
    FontAwesomeModule,
    RouterModule
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
    NzBreadCrumbModule,
    FontAwesomeModule
  ],
  providers: [NzModalService]
})
export class SharedComponentsModule { }
