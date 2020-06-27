import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  networkLeaders$;
  constructor(db: AngularFirestore) {

  }

  private fetchNetworkLeaders(){
    this.db
  }

}
