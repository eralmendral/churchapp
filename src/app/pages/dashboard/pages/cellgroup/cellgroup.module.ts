import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellgroupService } from '../../services/cellgroups.service';
import { CellgroupResolver } from '../../resolvers/cellgroups.resolver';
import { SetcellgroupComponent } from './subpages/setcellgroup/setcellgroup.component';
import { CellgrouplistComponent } from './subpages/cellgrouplist/cellgrouplist.component';
import { CellgroupinfoComponent } from './subpages/cellgroupinfo/cellgroupinfo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/sharedcomponents/sharedcomponents.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [SetcellgroupComponent, CellgrouplistComponent, CellgroupinfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedComponentsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [CellgroupResolver, CellgroupService ]
})
export class CellgroupModule { }
