import { Component } from '@angular/core';
import { ICellRendererAngularComp }  from 'ag-grid-community/dist/ag-grid-community';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-button',
  template: '<button class="btn btn-outline" (click)="viewNetwork()">View</button>' +
            `<button class="btn btn-success-outline" (click)="editNetwork()">Edit</button>`
})
export class ActionButtonComponent implements ICellRendererAngularComp
{

  private params: any;
  public cell: any;
  constructor(private router: Router, private route: ActivatedRoute){}
  agInit(params: any): void
  {
    this.params = params;
  }

  refresh(): boolean
  {
    return false;
  }

  viewNetwork(){
    this.router.navigate(['view', this.params.data.id], { relativeTo: this.route})
  }

  editNetwork(){
    this.router.navigate(['edit', this.params.data.id], { relativeTo: this.route})
  }
}
