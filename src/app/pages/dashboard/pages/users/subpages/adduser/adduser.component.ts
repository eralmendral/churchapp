import { selectNetworks, selectCellgroups, selectUsers } from './../../../../dashboard.selectors';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  networks$;
  cellgroups$;
  users$;
  usersMap = {};
  imageSrc;

  constructor(private afs: AngularFirestore, private store: Store<DashboardState>, private fb: FormBuilder) {}

  ngOnInit(): void {
     this.store.pipe(select(selectUsers)).subscribe(userData => {
       userData.forEach(user => {
         this.usersMap[user.id] = user.firstname + ' ' + user.lastname;
       })
     });

    this.cellgroups$ = this.store.pipe(select(selectCellgroups));
    this.networks$ = this.store.pipe(select(selectNetworks));
   }
  
  userForm = this.fb.group({
    userData: this.fb.group({
      id: ['', [Validators.required], [this.userIdExists()]],
      network: ['', Validators.required,],
      cellgroup: ['', Validators.required],
      encounterbatch: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: [''],
      phone: [''],
      email: ['', Validators.required],
      birthdate: [''],
    }), 
    userProfile: this.fb.group({
      userAddress: this.fb.group({
        unit: [''],
        street: [''],
        barangay: [''],
        city: [''],
      }),
      workplace: [''],
      campus: [''],
    })
  })

  addUser() {
    console.log('add user');
    console.log(this.userForm.get('userData.id'));
  }

  readURL(event: Event): void {
     let eventFile = (<HTMLInputElement>event.target);
      if (eventFile.files && eventFile.files[0]) {
          const file = eventFile.files[0];  
          const reader = new FileReader();
          reader.onload = e => this.imageSrc = reader.result;
          reader.readAsDataURL(file);
      }
  }

  // Validators
userIdExists() {
    return (control: AbstractControl): any => {
      return new Promise((resolve, reject) => {
        if(this.usersMap.hasOwnProperty(control.value)) {
          resolve({ idtaken: true})
        } 
        resolve(null)
      })
    }
  }
}
