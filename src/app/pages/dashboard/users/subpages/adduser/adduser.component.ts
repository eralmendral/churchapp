import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { DashboardState } from '../../../reducers';
import { Store } from '@ngrx/store';
import { addUser } from '../../../dashboard.actions';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  networks;
  cellgroups;
  users;


  constructor(private afs: AngularFirestore) {
    this.users = this.afs.collection('users').valueChanges();
    this.cellgroups = this.afs.collection('cellgroups').valueChanges();
    this.networks = this.afs.collection('networks').valueChanges();
   }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    userData: new FormGroup({
      id: new FormControl('', Validators.required),
      network: new FormControl('', Validators.required),
      cellgroup: new FormControl('', Validators.required),
      encounterbatch: new FormControl(''),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      gender: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('', Validators.required),
      birthdate: new FormControl(''),
    }),
    userProfile: new FormGroup({
      userAddress: new FormGroup({
        unit: new FormControl(''),
        street: new FormControl(''),
        barangay: new FormControl(''),
        city: new FormControl(''),
      }),
      workplace: new FormControl(''),
      campus: new FormControl(''),
    })
  });

  addUser() {
    console.log('add user');
  }
}
