import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRequestPasswordComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends NbRequestPasswordComponent {

  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options:{},
    cd: ChangeDetectorRef,
    router: Router,
    private _auth: AuthService,
    private toastrService: NbToastrService){
    super(service, options, cd, router);
    this.showMessages.success = false;
    this.showMessages.error = false;
  }

  requestPass() {
    this.submitted = true;
    this._auth.forgotPassword(this.user.email)
      .then(res => {
        console.log(res);
        if (res) {
          this.submitted = false;
          this.notifyUser('Please check your email for the verification code.', 'success');
          this.router.navigate(['/auth/reset-password']);
        }
      })
      .catch(err => {
        this.submitted = false;
        this.notifyUser(err.message, 'deanger');
        this.router.navigate(['/auth/reset-password']);
      })
  }

  notifyUser(msg, status) {
    this.toastrService.show(
      status || 'Success',
      msg,
      { status });
  }

}
