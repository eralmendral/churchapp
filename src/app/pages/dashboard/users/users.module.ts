import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ClarityModule } from '@clr/angular';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserslistComponent } from './subpages/userslist/userslist.component';
import { AdduserComponent } from './subpages/adduser/adduser.component';
import { EdituserComponent } from './subpages/edituser/edituser.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserslistComponent,
    AdduserComponent,
    EdituserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ClarityModule,
    AgGridModule.withComponents([]),
    ]
})
export class UsersModule { }
