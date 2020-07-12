import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserslistComponent } from './subpages/userslist/userslist.component';
import { AdduserComponent } from './subpages/adduser/adduser.component';
import { EdituserComponent } from './subpages/edituser/edituser.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@NgModule({
  declarations: [
    UsersComponent,
    UserslistComponent,
    AdduserComponent,
    EdituserComponent,
  ],
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
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
    AgGridModule.withComponents([]),
    ]
})
export class UsersModule { }
