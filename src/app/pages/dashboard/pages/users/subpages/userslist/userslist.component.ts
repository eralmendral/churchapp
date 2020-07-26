import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ProfilePicComponent } from '../../components/grid-components/profile-pic.component';
import { ActionButtonComponent } from '../../components/grid-components/action-button.component';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { selectUsers } from 'src/app/pages/dashboard/dashboard.selectors';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit, OnDestroy {

  pageSize = '1';

  users$;
  networks = {};
  usersCollection;
  networksCollection;
  public frameworkComponents;
  public columnDefs;
  public defaultColDef;
  public getRowHeight;

  constructor (private store: Store<DashboardState>)
  {
    this.columnDefs = [
        { headerName: 'Action', field: 'action', width: 200, filter: false, cellRenderer: 'actionButtonRenderer' },
        { headerName: 'Image', field: 'profile_pic', cellRenderer: 'profilePicRenderer', filter: false, },
        { headerName: 'ID', field: 'id', filter: 'agTextColumnFilter', sortable: true, width: 150 },
        { headerName: 'Firstname', field: 'firstname', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Lastname', field: 'lastname', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Network', field: 'network', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Phone', field: 'phone', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Email', field: 'email', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Gender', field: 'gender', filter: 'agTextColumnFilter', width: 150 }
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

  ngOnInit(): void {
    this.fetchUsers();
   }

   fetchUsers() {
      this.users$ = this.store.pipe(select(selectUsers));
   }

  ngOnDestroy(): void {
    
   }

}
