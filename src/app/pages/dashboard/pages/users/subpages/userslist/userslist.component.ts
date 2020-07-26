import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { selectUsers } from 'src/app/pages/dashboard/dashboard.selectors';

import { GenderRendererComponent } from 'src/app/sharedcomponents/aggrid-renderers-components/agrenderer-gender.component';
import { ProfilePicRendererComponent } from '../../../../../../sharedcomponents/aggrid-renderers-components/agrenderer-profilepic.component';
import { ActionButtonComponent } from '../../components/grid-components/action-button.component';
import { NetworkLeaderRendererComponent } from 'src/app/sharedcomponents/aggrid-renderers-components/agrenderer-networkleader.component';
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

  constructor(private store: Store<DashboardState>) {
    this.columnDefs = [
      { headerName: 'Action', field: 'action', width: 200, filter: false, cellRenderer: 'actionButtonRenderer', suppressSizeToFit: true }, 
      { headerName: 'Image', field: 'profile_pic', cellRenderer: 'profilePicRenderer', filter: false, },
      { headerName: 'ID', field: 'id', filter: 'agTextColumnFilter', sortable: true, width: 150 },
      { headerName: 'Firstname', field: 'firstname', filter: 'agTextColumnFilter', sortable: true, suppressSizeToFit: true,}, 
      { headerName: 'Lastname', field: 'lastname', filter: 'agTextColumnFilter', sortable: true, suppressSizeToFit: true,}, 
      { headerName: 'Network', field: 'network', filter: 'agTextColumnFilter', sortable: true , cellRenderer: 'networkLeaderRenderer'},
      { headerName: 'Phone', field: 'phone', filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'Email', field: 'email', filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'Gender', field: 'gender', filter: 'agTextColumnFilter', width: 150 , cellRenderer: 'userGenderRenderer'}
    ];

    this.frameworkComponents = {
      profilePicRenderer: ProfilePicRendererComponent,
      actionButtonRenderer: ActionButtonComponent,
      userGenderRenderer: GenderRendererComponent,
      networkLeaderRenderer: NetworkLeaderRendererComponent
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

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }


  ngOnDestroy(): void {

  }

}
