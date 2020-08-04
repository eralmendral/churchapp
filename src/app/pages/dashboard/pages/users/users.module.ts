import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserslistComponent } from './subpages/userslist/userslist.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { SharedComponentsModule } from 'src/app/sharedcomponents/sharedcomponents.module';
import { UsersResolver } from '../../resolvers/users.resolver';
import { SetuserComponent } from './subpages/setuser/setuser.component';
import { UserinfoComponent } from './subpages/userinfo/userinfo.component';
import { UserResolver } from '../../resolvers/user.resolver';
import { ActionButtonComponent } from './components/grid-components/action-button.component';
import { ProfileResolver } from '../../resolvers/profile.resolver';
import { ProfilesResolver } from '../../resolvers/profiles.resolver';

@NgModule({
  declarations: [
    UsersComponent,
    UserslistComponent,
    SetuserComponent,
    UserinfoComponent,
    ActionButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedComponentsModule,
    AgGridModule.withComponents([]),
    ],
    providers: [ UsersResolver, UserResolver, ProfilesResolver, ProfileResolver, UsersService ],
})
export class UsersModule {
 }
