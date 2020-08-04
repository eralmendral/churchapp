import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { selectCellgroups } from 'src/app/pages/dashboard/dashboard.selectors';
import { GenderRendererComponent } from 'src/app/sharedcomponents/aggrid-renderers-components/agrenderer-gender.component';

@Component({
  selector: 'app-cellgrouplist',
  templateUrl: './cellgrouplist.component.html',
  styleUrls: ['./cellgrouplist.component.scss']
})

export class CellgrouplistComponent implements OnInit {
  public frameworkComponents;
  public columnDefs;
  public defaultColDef;
  public getRowHeight;
  public cellgroups$;

  constructor(private store: Store<DashboardState>) {

    this.columnDefs = [
      { headerName: 'Action', field: 'action', width: 300, filter: false, cellRenderer: 'actionButtonRenderer',suppressSizeToFit: true, },
      { headerName: 'Leader', field: 'leader', sortable: true },
      { headerName: 'Meeting Day', field: 'meeting_day', sortable: true },
      { headerName: 'Gender', field: 'gender', sortable: true, cellRenderer: 'cellgroupGenderRenderer', suppressSizeToFit: true,},
      { headerName: 'Leadership', field: 'leader', sortable: true },
      { headerName: 'Lifegroup', field: 'leader', sortable: true },
      { headerName: 'Total', field: 'total', sortable: true, suppressSizeToFit: true },
    ];

    this.frameworkComponents = {
      cellgroupGenderRenderer: GenderRendererComponent,
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
    this.cellgroups$ = this.store.pipe(select(selectCellgroups))
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
