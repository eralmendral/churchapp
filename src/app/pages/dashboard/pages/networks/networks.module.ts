import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworklistComponent } from './subpages/networklist/networklist.component';
import { ViewnetworkComponent } from './subpages/viewnetwork/viewnetwork.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { NetworkService } from '../../services/network.service';
import { NetworkResolver } from '../../resolvers/networks.resolver';
import { SharedComponentsModule } from 'src/app/sharedcomponents/sharedcomponents.module';
import { SetnetworkComponent } from './subpages/setnetwork/setnetwork.component';


@NgModule({
  declarations: [
    NetworklistComponent,
    ViewnetworkComponent,
    SetnetworkComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedComponentsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    NetworkService,
    NetworkResolver
  ]
})
export class NetworksModule { }
