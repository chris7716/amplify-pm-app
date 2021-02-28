import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { AuthService, User } from '../../service/auth.service';

@Component({
  selector: 'ngx-admin-profile-set-up',
  templateUrl: './admin-profile-set-up.component.html',
  styleUrls: ['./admin-profile-set-up.component.scss']
})
export class AdminProfileSetUpComponent extends NbRegisterComponent {

  userData: User = new User();
  submitted = false;
  
  constructor(service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options:{},
    cd: ChangeDetectorRef,
    router: Router,
    private _auth: AuthService,
    private toastrService: NbToastrService){
    super(service, options, cd, router);

  }

  setupProfile(){
    this.submitted = true;
    this.userData.username = this.user.email;
    this.userData.email = this.user.email;
    this.userData.newPassword = this.user.newPassword;
    this.userData.password = this.user.password;
    this.userData.name = this.user.fullName;
    this.userData.phoneNumber = this.user.mobile;

    this._auth.signIn(this.userData)
      .then(res => {
        if(res.challengeName === 'NEW_PASSWORD_REQUIRED'){
          this._auth.setupAdminProfile(this.userData, res);
        } else {
          this.notifyUser('danger', `Invalid action!`);
        }
      })
      .then(res => {
        this.userData.password = this.user.newPassword;
        this._auth.signIn(this.userData);
      })
      .then(res => {
        console.log("res");
        console.log(res);
        this.notifyUser('success', `Profile setup success`);
        console.log(this._auth.getAuthenticatedUser());
        this.router.navigate(['/admin']);
      })
      .catch(err => {
        this.submitted = false;
        this.showMessages.error = true;
        this.errors.push(err.message);
      });
  }

  notifyUser(status, message) {
    this.toastrService.show(
      message,
      { status });
  }

}
