import { Component, OnInit } from '@angular/core';
import { AuthActions } from 'src/app/pages/auth/action-types';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
  }


  logout() {
    this.store.dispatch(AuthActions.logout())
    this.router.navigate(['login'])
  }
}
