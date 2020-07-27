import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { login } from '../auth.actions';
import { AuthActions } from '../action-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = '';
  constructor(private router: Router, private auth: AuthService, private store: Store<AppState>) { 
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).then((data: any) => {
      if(data){
        this.store.dispatch(AuthActions.login({user : { email: this.loginForm.value.email }}))
        this.error = '';
        this.router.navigate(['dashboard'])
      } 
    }).catch((err: any) =>{
      this.error = err;
    })
  }
}
