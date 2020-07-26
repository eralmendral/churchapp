import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { selectUsers, selectCellgroups, selectNetworks } from 'src/app/pages/dashboard/dashboard.selectors';
import { addUser, updateUser } from 'src/app/pages/dashboard/dashboard.actions';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-setuser',
  templateUrl: './setuser.component.html',
  styleUrls: ['./setuser.component.scss']
})
export class SetuserComponent implements OnInit {
  networks$;
  cellgroups$;
  users$;
  usersMap = {};
  imageSrc;
  userForm;
  userData;
  mode = 'add';   // edit || add

  constructor(private store: Store<DashboardState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modal: NzModalService) {
  }

  ngOnInit(): void {
    let userDataLength;
   
    if(this.route.snapshot.data !== undefined) {
      this.userData = this.route.snapshot.data.userData;
      userDataLength = Object.keys(this.route.snapshot.data).length;
      this.mode = userDataLength > 0 ? 'edit' : 'add';
    }

    let uniqueIdValidator = this.mode === 'add' ? [this.userIdExists()] : [];

    this.userForm = this.fb.group({
      userData: this.fb.group({
        id: [userDataLength > 0 ? this.userData.id : '', [Validators.required], uniqueIdValidator],
        network: [userDataLength ? this.userData.network : '', Validators.required],
        cellgroup: [userDataLength ? this.userData.cellgroup : '', Validators.required],
        encounterbatch: [userDataLength ? this.userData.encounterbatch : '', Validators.required],
        level: [userDataLength ? this.userData.level : '', Validators.required],
        firstname: [userDataLength ? this.userData.firstname : '', Validators.required],
        lastname: [userDataLength ? this.userData.lastname : '', Validators.required],
        gender: [userDataLength ? this.userData.gender : '', Validators.required],
        phone: [userDataLength ? this.userData.phone : '', Validators.required],
        email: [userDataLength ? this.userData.email : '', [Validators.required, Validators.email]],
        birthdate: [],
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

    this.store.pipe(select(selectUsers)).subscribe(userData => {
      userData.forEach(user => {
        this.usersMap[user.id] = user.firstname + ' ' + user.lastname;
      })
    });

    this.cellgroups$ = this.store.pipe(select(selectCellgroups));
    this.networks$ = this.store.pipe(select(selectNetworks))
  }

  addUser() {
    // dispatch add user 
    if(this.mode === 'add') {
      this.store.dispatch(addUser(this.userForm.get('userData').value));
    } else if(this.mode === 'edit') {
      this.store.dispatch(updateUser(this.userForm.get('userData').value));
    }

    // dispatch add profile, upload profile pic effect

    // upload profile pic?
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
        if (this.usersMap.hasOwnProperty(control?.value)) {
          resolve({ idtaken: true })
        }
        resolve(null)
      })
    }
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to archive this user?',
      nzContent: '',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
