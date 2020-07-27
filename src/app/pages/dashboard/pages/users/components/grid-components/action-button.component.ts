import { Component } from '@angular/core';
import { ICellRendererAngularComp }  from 'ag-grid-community/dist/ag-grid-community';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-button',
  template: `<button type="submit" class="btn pull-right mx-1" nz-button nzType="danger" (click)="viewUser()" [nzSize]="'medium'"><i nz-icon nzType="eye"></i>View</button>` + 
            `<button type="submit" class="btn pull-right mx-1" nz-button nzType="primary" (click)="editUser()" [nzSize]="'medium'"><i nz-icon nzType="edit"></i>Edit</button>`
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

  viewUser(){
    this.router.navigate(['view', this.params.data.id], { relativeTo: this.route})
  }

  editUser(){
    this.router.navigate(['edit', this.params.data.id], { relativeTo: this.route})
  }
}

