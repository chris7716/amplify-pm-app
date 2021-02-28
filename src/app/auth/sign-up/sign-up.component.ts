import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { AuthService, User } from '../../service/auth.service';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends NbRegisterComponent {

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

  async signUp(){
    this.submitted = true;
    this.showMessages.error = false;
    this.errors.pop();
    this.userData.username = this.user.email;
    this.userData.email = this.user.email;
    this.userData.password = this.user.password;
    this.userData.name = this.user.fullName;
    this.userData.phoneNumber = this.user.phoneNumber;

    this._auth.signUp(this.userData)
      .then(result => {
        this.submitted = false;
        console.log(result);
        this.notifyUser();
      })
      .then(res => {
        console.log("Passed");
        this.showMessages.success = false;
        this.messages.pop();
        this.router.navigate(['/auth/sign-in']);
      })
      .catch(err => {
        this.submitted = false;
        this.showMessages.error = true;
        this.errors.push(err.message);
        console.log(err)
        }
      )
  }

  notifyUser() {
    let status = 'success';
    this.toastrService.show(
      status || 'Success',
      `Please check your email to verify your account!`,
      { status });
  }

}
