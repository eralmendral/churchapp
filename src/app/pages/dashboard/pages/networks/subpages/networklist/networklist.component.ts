import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActionButtonComponent } from '../../components/grid-components/action-button.component';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { Store,  select} from '@ngrx/store';
import { selectUsers, selectNetworks } from 'src/app/pages/dashboard/dashboard.selectors';
import { Subscription } from 'rxjs';
import { GenderRendererComponent } from '../../../../../../sharedcomponents/aggrid-renderers-components/agrenderer-gender.component';
import { CellLeaderRendererComponent } from '../../../../../../sharedcomponents/aggrid-renderers-components/agrenderer-cellleader.component';
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
        { headerName: 'Action', field: 'action', width: 300, filter: false, cellRenderer: 'actionButtonRenderer',suppressSizeToFit: true, },
        { headerName: 'Network Name', field: 'name', cellRenderer: 'profilePicRenderer', },
        { headerName: 'Leader', field: 'leader', sortable: true, cellRenderer: 'cellLeaderRenderer',  },
        { headerName: 'Gender', field: 'gender', sortable: true, cellRenderer: 'networkGenderRenderer', suppressSizeToFit: true,},
        { headerName: 'Total', field: 'total', sortable: true, suppressSizeToFit: true },
      ];

    this.frameworkComponents = {
      actionButtonRenderer: ActionButtonComponent,
      cellLeaderRenderer: CellLeaderRendererComponent,
      networkGenderRenderer: GenderRendererComponent,
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

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
