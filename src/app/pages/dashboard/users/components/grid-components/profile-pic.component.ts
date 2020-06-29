import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-community/dist/ag-grid-community';

@Component({
  selector: 'app-profile-pic',
  template: "<img src='{{ profileImage() }}' class='profile-avatar' />",
})
export class ProfilePicComponent implements ICellRendererAngularComp {

  private params: any;

  agInit(params: any): void
  {
    this.params = params;
  }

  public profileImage()
  {
    return this.params.value ? this.params.value : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  }

  refresh(): boolean
  {
    return false;
  }
}
