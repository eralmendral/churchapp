import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  constructor (private storage: AngularFireStorage, private afs: AngularFirestore) { }

  userForm = new FormGroup({
    userData: new FormGroup({
      id: new FormControl('', Validators.required),
      network: new FormControl('', Validators.required),
      cellgroup: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    }),
    userProfile: new FormGroup({
      birthdate: new FormControl('', Validators.required),
      userAddress: new FormGroup({
        unit: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        barangay: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
      }),
      workplace: new FormControl('', Validators.required),
    })
  });


  ngOnInit(): void {
  }



  onAddUser() {
    const data = this.userForm.value;
    data.userData.profile_pic = ''
    data.userProfile.id = data.userData.id;

    const { id, network,firstname, lastname, gender, phone, email } = data.userData;
    const { birthdate, workplace } = data.userProfile;
    const { unit,street, barangay, city } = data.userProfile.userAddress;

    this.afs.collection('users').doc(id).set(data.userData);
    this.afs.collection('profile').doc(id).set(data.userProfile);
  }
}
