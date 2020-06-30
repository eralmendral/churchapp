import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworklistComponent } from './subpages/networklist/networklist.component';
import { AddnetworkComponent } from './subpages/addnetwork/addnetwork.component';
import { EditnetworkComponent } from './subpages/editnetwork/editnetwork.component';
import { ViewnetworkComponent } from './subpages/viewnetwork/viewnetwork.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { AgGridModule } from 'ag-grid-angular';


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
    ClarityModule,
    AgGridModule.withComponents([]),
  ]
})
export class NetworksModule { }
