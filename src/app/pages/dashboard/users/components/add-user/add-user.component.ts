import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  constructor (private storage: AngularFireStorage) { }

  userForm = new FormGroup({
        id: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
    });


  ngOnInit(): void {
  }

  uploadFile(event, path) {
    const file = event.target.files[0];
    const filePath = '';
    // const task = this.storage.upload(filePath, file);
  }

}
