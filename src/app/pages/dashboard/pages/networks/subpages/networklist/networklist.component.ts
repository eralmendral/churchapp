import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActionButtonComponent } from '../../components/grid-components/action-button.component';
import { CellLeaderComponent } from '../../components/grid-components/cell-leader.component';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { Store,  select} from '@ngrx/store';
import { selectUsers, selectNetworks } from 'src/app/pages/dashboard/dashboard.selectors';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-networklist',
  templateUrl: './networklist.component.html',
  styleUrls: ['./networklist.component.scss']
})
export class NetworklistComponent implements OnInit, OnDestroy {
  public frameworkComponents;
  public columnDefs;
  public defaultColDef;
  public getRowHeight;
  public networks$;
  public users;
  private subscription: Subscription;
  constructor (private store: Store<DashboardState>)
  {

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
    this.fetchNetworks();
  }



  fetchNetworks() {
    this.subscription = this.store.pipe(select(selectUsers)).subscribe((users) => {
        // perform network mapping here
    });
    
    this.networks$ = this.store.pipe(select(selectNetworks));
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
