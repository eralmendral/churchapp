import { Component } from '@angular/core';
import { ICellRendererAngularComp }  from 'ag-grid-community/dist/ag-grid-community';
import { Router,  ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { selectUserById } from 'src/app/pages/dashboard/dashboard.selectors';
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
  public profilepic;

  constructor(private store: Store<DashboardState>){}
  agInit(params: any): void
  {
    this.params = params;
    this.store.select(selectUserById(params.value)).subscribe(user => {
      this.name = user.firstname + ' ' + user.lastname;
    })

 }

  refresh(): boolean
  {
    return false;
  }
}
