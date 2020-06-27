import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  basic = false;
  pageSize = '1';
  columnDefs = [
    { headerName: 'Action', field: 'action'},
    { headerName: 'Image', field: 'image' },
    { headerName: 'ID', field: 'id', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'Firstname', field: 'firstname', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'Lastname', field: 'lastname', filter: 'agTextColumnFilter' , sortable: true },
    { headerName: 'Network', field: 'network', filter: 'agTextColumnFilter' , sortable: true },
    { headerName: 'Phone', field: 'phone', filter: 'agTextColumnFilter' , sortable: true },
    { headerName: 'Email', field: 'email', filter: 'agTextColumnFilter' , sortable: true }
  ];

  users: Observable<any[]>
  usersCollection;
  constructor(private afs: AngularFirestore,) {
    this.usersCollection = afs.collection('users');
    this.users = this.usersCollection.valueChanges();
  }

  ngOnInit(): void {
    this.afs.collection('users').snapshotChanges().pipe(map(actions => actions.map(a => {

    })));
  }

  showAddUser(){
    this.basic = true;
  }

}
