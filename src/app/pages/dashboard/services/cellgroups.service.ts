import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CellgroupService {

    cellgroups: Observable<any[]>
    constructor(private afs: AngularFirestore){}
    
    fetchCellgroups() {
        this.cellgroups = this.afs.collection('cellgroups').valueChanges();
        return this.cellgroups;
    }
}