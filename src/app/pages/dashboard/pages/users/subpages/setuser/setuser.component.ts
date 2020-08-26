import { removeUser } from './../../../../dashboard.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { selectUsers, selectCellgroups, selectNetworks } from 'src/app/pages/dashboard/dashboard.selectors';
import { addUser, updateUser, addProfile, updateProfile } from 'src/app/pages/dashboard/dashboard.actions';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { faSchool, faBuilding, faHome, faEnvelope, faPhone, faGraduationCap, faLayerGroup, faUsers, faProjectDiagram , faMale, faFemale, faAddressCard } from '@fortawesome/free-solid-svg-icons';

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
  networksMap = {};
  imageSrc;
  userForm;
  userData;
  userProfile;
  mode = 'add';   // edit || add

  // fontawesome icons
  faSchool = faSchool;
  faBuilding = faBuilding;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGraduationCap = faGraduationCap;
  faLayerGroup = faLayerGroup;
  faProjectDiagram = faProjectDiagram;
  faUsers = faUsers;
  faMale = faMale;
  faFemale = faFemale;
  faAddressCard = faAddressCard;

  constructor(private store: Store<DashboardState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modal: NzModalService) {
  }

  ngOnInit(): void {
    let routeData = Object.keys(this.route.snapshot.data).length;

    if (routeData) {
      this.userData = this.route.snapshot.data.userData;
      this.userProfile = this.route.snapshot.data.userProfile;
    }

    this.mode = routeData ? 'edit' : 'add';

    let uniqueIdValidator = this.mode === 'add' ? [this.userIdExists()] : [];

    this.userForm = this.fb.group({
      userData: this.fb.group({
        id: [routeData ? this.userData.id : '', [Validators.required], uniqueIdValidator],
        network: [routeData ? this.userData.network : '', Validators.required],
        cellgroup: [routeData ? this.userData.cellgroup : '', Validators.required],
        encounterbatch: [routeData ? this.userData.encounterbatch : ''],
        level: [routeData ? this.userData.level : ''],
        firstname: [routeData ? this.userData.firstname : '', Validators.required],
        lastname: [routeData ? this.userData.lastname : '', Validators.required],
        gender: [routeData ? this.userData.gender : '', Validators.required],
        phone: [routeData ? this.userData.phone : '', Validators.required],
        email: [routeData ? this.userData.email : '', [Validators.required, Validators.email]],
        birthdate: [],
        profile_pic: []
      }),
      userProfile: this.fb.group({
        address: this.fb.group({
          unit: [routeData ? this.userProfile?.address.unit : ''],
          street: [routeData ? this.userProfile?.address.street : ''],
          barangay: [routeData ? this.userProfile?.address.city : ''],
          city: [routeData ? this.userProfile?.address.city : ''],
        }),
        workplace: [routeData ? this.userProfile?.workplace : ''],
        campus: [routeData ? this.userProfile?.campus : ''],
      })
    })

    this.store.pipe(select(selectUsers)).subscribe(userData => {
      userData.forEach(user => {
        this.usersMap[user.id] = user.firstname + ' ' + user.lastname;
      })
    });

    this.store.pipe(select(selectNetworks)).subscribe(networkData => {
      networkData.forEach(network => {
        this.networksMap[network.id] = network.name;
      })
    });

    this.cellgroups$ = this.store.pipe(select(selectCellgroups));
    this.networks$ = this.store.pipe(select(selectNetworks));
  }

  saveUser() {
    let profileData = {
      ...this.userForm.get('userProfile').value,
      userid: this.userForm.get('userData.id').value
    }

    console.log(this.userForm.get('userData.firstname'))

    // // dispatch add user 
    if (this.mode === 'add') {
      this.store.dispatch(addUser({ user: this.userForm.get('userData').value }));
      this.store.dispatch(addProfile({ profile: profileData }))
    } else if (this.mode === 'edit') {
      this.store.dispatch(updateUser({ user: this.userForm.get('userData').value }));
      this.store.dispatch(updateProfile({ profile: profileData }))
    }
  }

  readURL(event: Event): void {
    let eventFile = (<HTMLInputElement>event.target);
    if (eventFile.files && eventFile.files[0]) {
      const file = eventFile.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = reader.result
        // this.userForm.patchValue({  userData: { profile_pic: reader.result }})
      };
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

  showDeleteConfirm(userId): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to archive this user?',
      nzContent: '',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.store.dispatch(removeUser({ userId: userId }))
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
