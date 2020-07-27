import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedComponentsModule } from 'src/app/sharedcomponents/sharedcomponents.module';

// Services
import { NetworkService } from '../../services/network.service';
import { NetworksResolver } from '../../resolvers/networks.resolver';
import { NetworkResolver } from '../../resolvers/network.resolver';

// Components
import { NetworklistComponent } from './subpages/networklist/networklist.component';
import { ViewnetworkComponent } from './subpages/viewnetwork/viewnetwork.component';
import { SetnetworkComponent } from './subpages/setnetwork/setnetwork.component';
import { ActionButtonComponent } from './components/grid-components/action-button.component';

@NgModule({
  declarations: [
    NetworklistComponent,
    ViewnetworkComponent,
    SetnetworkComponent,
    ActionButtonComponent,
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
    NetworksResolver,
    NetworkResolver,
  ]
})
export class NetworksModule { }
