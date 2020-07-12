import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { 

  }

  login(email: string, password: string) {
     return new Promise((resolve, reject) => {
       try {
         let user = this.afAuth.auth.signInWithEmailAndPassword(email, password)
         resolve(user);
       } catch(error) {
         reject(error)
       }
     })
  }
}
