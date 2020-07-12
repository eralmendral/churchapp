import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworklistComponent } from './subpages/networklist/networklist.component';
import { AddnetworkComponent } from './subpages/addnetwork/addnetwork.component';
import { EditnetworkComponent } from './subpages/editnetwork/editnetwork.component';
import { ViewnetworkComponent } from './subpages/viewnetwork/viewnetwork.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { NetworkService } from '../../services/network.service';
import { NetworkResolver } from '../../resolvers/networks.resolver';


@NgModule({
  declarations: [
    NetworklistComponent,
    AddnetworkComponent,
    EditnetworkComponent,
    ViewnetworkComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    NetworkService,
    NetworkResolver
  ]
})
export class NetworksModule { }
