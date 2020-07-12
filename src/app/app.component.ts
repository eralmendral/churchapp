import { Component } from '@angular/core';
import { AppState } from './reducers';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from './pages/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'churchapp';

  constructor(private router: Router, private store: Store<AppState>) {
    
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      console.log('event:',event);
    })

    this.store.subscribe(state => console.log("store value:", state))

    const userProfile = localStorage.getItem('user');
    if(userProfile) {
      this.store.dispatch(login({ user: JSON.parse(userProfile )}))
    }
  }

}
