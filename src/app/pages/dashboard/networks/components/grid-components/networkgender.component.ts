import { Component } from '@angular/core';
import { ICellRendererAngularComp }  from 'ag-grid-community/dist/ag-grid-community';

@Component({
  selector: 'app-action-button',
  template: '<p>{{ name }}</p>'
})
export class NetworkGender implements ICellRendererAngularComp
{

  private params: any;
  constructor(){}
  agInit(params: any): void
  {
    this.params = params;
    
 }

  refresh(): boolean
  {
    return false;
  }
}
