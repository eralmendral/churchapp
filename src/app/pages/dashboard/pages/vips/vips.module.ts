import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipslistComponent } from './subpages/vipslist/vipslist.component';
import { SharedComponentsModule } from 'src/app/sharedcomponents/sharedcomponents.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [VipslistComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedComponentsModule,
    AgGridModule.withComponents([]),
    ],
})
export class VipsModule { }
