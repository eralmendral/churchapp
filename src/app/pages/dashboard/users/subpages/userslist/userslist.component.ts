import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { DashboardRoutingModule } from '../../../dashboard-routing.module';
import { ProfilePicComponent } from '../../components/grid-components/profile-pic.component';
import { ActionButtonComponent } from '../../components/grid-components/action-button.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit, OnDestroy {

  pageSize = '1';

  users;
  networks = {};
  usersCollection;
  networksCollection;
  public frameworkComponents;
  public columnDefs;
  public defaultColDef;
  public getRowHeight;

  constructor (private afs: AngularFirestore)
  {
    this.networksCollection =  this.afs.collection('networks').valueChanges();
    this.networksCollection.subscribe((networksRes: any) => {
      networksRes.forEach((network: any, index) => {
         this.networks[network.id] = { name: network.name , leader: network.leader, id: network.id };
      })
    });
    
    this.usersCollection = this.afs.collection('users').valueChanges();
    this.usersCollection.subscribe(res => {
        res.forEach(user => {
          if(user.network){
              user.network =  this.networks[user.network].name
          }
        })

      this.users = res;
    });

    this.columnDefs = [
        { headerName: 'Action', field: 'action', width: 400, filter: false, cellRenderer: 'actionButtonRenderer' },
        { headerName: 'Image', field: 'profile_pic', cellRenderer: 'profilePicRenderer', filter: false, },
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

  ngOnDestroy(): void {
    
   }

}
