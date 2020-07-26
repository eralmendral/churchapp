import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-community/dist/ag-grid-community';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { Store } from '@ngrx/store';
import { selectNetworkById } from 'src/app/pages/dashboard/dashboard.selectors';

@Component({
  selector: 'app-profile-pic',
  template: `<a [routerLink]="networkRoute">{{networkname}}</a>`,
})
export class NetworkLeaderRendererComponent implements ICellRendererAngularComp {
  networkname = '';
  networkRoute = '/dashboard/networks/view';
  constructor(private store: Store<DashboardState>) {}

  private params: any;

  agInit(params: any): void
  {
    this.params = params;
    this.fetchNetworkName(this.params.value);
  }

  fetchNetworkName(networkid) {
    if(networkid){
        this.store.select(selectNetworkById(networkid)).subscribe(network => {
            if(network){
                this.networkname = network.name;
                this.networkRoute += '/' + network.id;
            }
        });
    }
  }

  refresh(): boolean
  {
    return false;
  }
}
