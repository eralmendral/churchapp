import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  basic = false;
  columnDefs = [
    { headerName: 'Action', field: 'action' },
    { headerName: 'Image', field: 'image' },
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Network', field: 'network' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Email', field: 'email' }
  ];

  rowData = []
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection('users').snapshotChanges().subscribe(snaps => {
        snaps.map(snap => {

        const data = snap.payload.doc.data();
        const id = snap.payload.doc.id;

        console.log(id, data);

      })
    })
  }

}
