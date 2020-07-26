import { Component } from '@angular/core';
import { ICellRendererAngularComp }  from 'ag-grid-community/dist/ag-grid-community';
import { Router,  ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-cellleader-renderer',
  template: '<p>{{ name }}</p>'
})
export class CellLeaderRendererComponent implements ICellRendererAngularComp
{

  private params: any;
  public cell: any;
  public users = {};
  public name: string;
  private profilepic: string;
  constructor(private afs: AngularFirestore){}
  agInit(params: any): void
  {
    this.params = params;
    this.name = params.value;
    console.log('debug params:', this.params)
 }

  refresh(): boolean
  {
    return false;
  }
}
