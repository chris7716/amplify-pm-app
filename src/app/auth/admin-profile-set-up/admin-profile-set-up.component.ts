import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';

@Component({
  selector: 'ngx-admin-profile-set-up',
  templateUrl: './admin-profile-set-up.component.html',
  styleUrls: ['./admin-profile-set-up.component.scss']
})
export class AdminProfileSetUpComponent extends NbRegisterComponent {

  constructor(service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options:{},
    cd: ChangeDetectorRef,
    router: Router){
    super(service, options, cd, router);

  }

}
