import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NetworkService {

    networks: Observable<any[]>
    constructor(private afs: AngularFirestore){}
    

    fetchNetworks() {
        this.networks = this.afs.collection('networks').valueChanges();
        return this.networks;
    }
}