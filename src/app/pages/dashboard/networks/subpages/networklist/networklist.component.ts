import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActionButtonComponent } from '../../components/grid-components/action-button.component';
import { CellLeaderComponent } from '../../components/grid-components/cell-leader.component';


@Component({
  selector: 'app-networklist',
  templateUrl: './networklist.component.html',
  styleUrls: ['./networklist.component.scss']
})
export class NetworklistComponent implements OnInit {
  public frameworkComponents;
  public columnDefs;
  public defaultColDef;
  public getRowHeight;
  public networks$;
  public users;

  constructor (private afs: AngularFirestore)
  {

    this.networks$ = this.afs.collection('networks').valueChanges();

    this.afs.collection('users').valueChanges().subscribe(users => {
      console.log(users);
    });

    this.columnDefs = [
        { headerName: 'Action', field: 'action', width: 400, filter: false, cellRenderer: 'actionButtonRenderer' },
        { headerName: 'Network Name', field: 'name', cellRenderer: 'profilePicRenderer' },
        { headerName: 'Leader', field: 'leader', filter: 'agTextColumnFilter', sortable: true, cellRenderer: 'cellLeaderRenderer' },
        { headerName: 'Gender', field: 'gender', filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Total', field: 'total', filter: 'agTextColumnFilter', sortable: true },
      ];

    this.frameworkComponents = {
      actionButtonRenderer: ActionButtonComponent,
      cellLeaderRenderer: CellLeaderComponent,
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
  }

}
