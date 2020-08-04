import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { DashboardState } from 'src/app/pages/dashboard/reducers';
import { selectCellgroups, selectNetworks } from 'src/app/pages/dashboard/dashboard.selectors';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  networks$;
  cellgroups$;
  userProfile;
  userData;
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<DashboardState>) { }

  ngOnInit(): void {
    this.userData= this.route.snapshot.data.userData;
    this.userProfile = this.route.snapshot.data.userProfile;

    console.log('user data + profile:' ,this.userData, this.userProfile);

    
    this.cellgroups$ = this.store.pipe(select(selectCellgroups));
    this.networks$ = this.store.pipe(select(selectNetworks))
  }

}
