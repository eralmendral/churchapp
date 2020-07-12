import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { login } from './pages/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private store: Store<AppState>){}

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');
    if(userProfile){
      this.store.dispatch(login({ user: JSON.parse(userProfile) }));
    }
    this.router.events.subscribe(events => {
      console.log(events);
    })
  }


}
