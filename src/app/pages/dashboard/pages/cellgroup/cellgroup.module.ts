import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellgroupService } from '../../services/cellgroups.service';
import { CellgroupResolver } from '../../resolvers/cellgroups.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CellgroupResolver, CellgroupService ]
})
export class CellgroupModule { }
