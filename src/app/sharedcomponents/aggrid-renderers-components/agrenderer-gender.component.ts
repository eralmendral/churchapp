import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-community/dist/ag-grid-community';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-networkgender-renderer',
  template: `<fa-icon [icon]="icon" size="2x" [styles]="iconStyle"></fa-icon> `
})
export class GenderRendererComponent implements ICellRendererAngularComp {

  private params: any;
  constructor() { }
  icon = faMale;
  iconStyle = {'color': '#ff4d4f'};
  agInit(params: any): void {
    this.params = params;
    if (this.params.data.gender === 'male') {
      this.icon = faMale;
      this.iconStyle.color = '#1890ff'
    } else {
       this.icon = faFemale;
    }
  }

  refresh(): boolean {
    return false;
  }
}
