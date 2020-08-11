import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vipslist',
  templateUrl: './vipslist.component.html',
  styleUrls: ['./vipslist.component.scss']
})
export class VipslistComponent implements OnInit {
  dateRange = [];
  vips$;
  public columnDefs;
  public frameworkComponents;
  public defaultColDef;
  public getRowHeight;


  data = [
    {
      "name": "Sunday Service",
      "value": 51
    },
    {
      "name": "The Radicals",
      "value": 111
    },
    {
      "name": "Online",
      "value": 41
    }
  ];


view: any[] = [1020, 400];

// options
showXAxis = true;
showYAxis = true;
gradient = true;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = 'Vips';
showYAxisLabel = true;
yAxisLabel = 'Count';

colorScheme = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#000']
};


constructor() {
  this.columnDefs = [
    { headerName: 'Phone', field: 'phone', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'Email', field: 'email', filter: 'agTextColumnFilter', sortable: true },
  ];

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

onChange(result: Date): void {
  console.log('onChange: ', result);
}

fetchUsers() {
  this.vips$ = [];
}

onFirstDataRendered(params) {
  params.api.sizeColumnsToFit();
}

onSelect(event) {
  console.log(event);
}
}
