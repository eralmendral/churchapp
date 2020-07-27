import { updateNetwork } from './../../../../dashboard.actions';
import { Component, OnInit } from '@angular/core';
import { selectPrimaries } from 'src/app/pages/dashboard/dashboard.selectors';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { addNetwork } from 'src/app/pages/dashboard/dashboard.actions';

@Component({
  selector: 'app-setnetwork',
  templateUrl: './setnetwork.component.html',
  styleUrls: ['./setnetwork.component.scss']
})
export class SetnetworkComponent implements OnInit {
  networkForm;
  primaries$;
  mode = 'add';
  networkData;
  constructor(private store: Store<DashboardState>, private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private modal: NzModalService) { }

  ngOnInit(): void {
    let routeData = Object.keys(this.route.snapshot.data).length;
    if (routeData) {
      this.networkData = this.route.snapshot.data.networkData;
    }

    this.primaries$ = this.store.pipe(select(selectPrimaries));
    this.mode = routeData ? 'edit' : 'add';

    this.networkForm = this.fb.group({
      name: [routeData ? this.networkData.name : '', Validators.required],
      leader: [routeData ? this.networkData.leader : '', Validators.required],
      gender: [routeData ? this.networkData.gender : '', Validators.required],
    })
  }

  saveNetwork() {
    let networkFormData = this.networkForm.value;
    if (this.mode === 'add') {
      this.store.dispatch(addNetwork(networkFormData))
    } else if (this.mode === 'edit') {
      let updateNetworkData = {
        id: this.networkData.id,
        ...networkFormData,
      }
      this.store.dispatch(updateNetwork(updateNetworkData))
    }
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to remove this network?',
      nzContent: '',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }


}
