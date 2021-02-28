import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbResetPasswordComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'ngx-submit-new-password',
  templateUrl: './submit-new-password.component.html',
  styleUrls: ['./submit-new-password.component.scss']
})
export class SubmitNewPasswordComponent extends NbResetPasswordComponent {

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

  resetPass() {
    this.submitted = true;
    this._auth.forgotPasswordSubmit(this.user.email, this.user.code, this.user.password);
    this.notifyUser(`Password reset done. Please login with your new password`, 'success');
    this.submitted = false;
    this.router.navigate(['/auth/sign-in']);
  }

  notifyUser(msg, status) {
    this.toastrService.show(
      status || 'Success',
      msg,
      { status });
  }

}
