import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-community/dist/ag-grid-community';
import { faFemale, faMale, faQuestion} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-networkgender-renderer',
  template: `<fa-icon [icon]="icon" size="2x" [styles]="iconStyle"></fa-icon> `
})
export class GenderRendererComponent implements ICellRendererAngularComp {

  private params: any;
  constructor() { }
  icon = faQuestion;
  iconStyle = { color : 'grey' };
  agInit(params: any): void {
    this.params = params;
    if (this.params.data.gender === 'male') {
      this.icon = faMale;
      this.iconStyle.color = '#1890ff'
    } else if (this.params.data.gender === 'female') {
      this.icon = faFemale;
      this.iconStyle.color = '#ff4d4f';
    } else {
      this.icon = faQuestion;
      this.iconStyle.color = 'grey';
    }
  }

  refresh(): boolean {
    return false;
  }
}
