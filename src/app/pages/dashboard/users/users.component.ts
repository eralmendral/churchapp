import { ActionButtonComponent } from './components/grid-components/action-button.component';
import { ProfilePicComponent } from './components/grid-components/profile-pic.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit
{
  @ViewChild(AddUserComponent) child: AddUserComponent;
  basic = false;
  pageSize = '1';

  users: Observable<any[]>;
  usersCollection;
  public frameworkComponents;
  public columnDefs;
  public defaultColDef;
  public getRowHeight;

  constructor (private afs: AngularFirestore, private store: Store<DashboardRoutingModule>)
  {
    this.usersCollection = afs.collection('users');
    this.users = this.usersCollection.valueChanges();
    
    this.columnDefs = [
        { headerName: 'Action', field: 'action', width: 400, filter: false, cellRenderer: 'actionButtonRenderer' },
        { headerName: 'Image', field: 'profile_pic', cellRenderer: 'profilePicRenderer' },
        { headerName: 'ID', field: 'id', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Firstname', field: 'firstname', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Lastname', field: 'lastname', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Network', field: 'network', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Phone', field: 'phone', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Email', field: 'email', filter: 'agTextColumnFilter', sortable: true }
      ];

    this.frameworkComponents = {
      profilePicRenderer: ProfilePicComponent,
      actionButtonRenderer: ActionButtonComponent
    }

    this.defaultColDef = {
      width: 200,
      sortable: true,
      resizable: true,
      filter: true,
      floatingFilter: true,
    };

  }

  ngOnInit(): void { }

  showAddUser()
  {
    this.basic = true;
  }

  addUser()
  {
    this.child.onAddUser();
  }

}
