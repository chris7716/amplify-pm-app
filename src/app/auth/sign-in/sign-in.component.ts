import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService, User } from '../../service/auth.service';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends NbLoginComponent {

  userData: User = new User();
  submitted = false;

  constructor(service: NbAuthService,@Inject(NB_AUTH_OPTIONS) options:{},
    cd: ChangeDetectorRef,
    router: Router,
    private _auth: AuthService){
    super(service, options, cd, router);
    this.showMessages.success = false;
    this.showMessages.error = false;
  }

  login() {
    this.submitted = true;
    this.showMessages.error = false;
    this.errors.pop();
    this.userData.username = this.user.email;
    this.userData.password = this.user.password;

    this._auth.signIn(this.userData)
      .then(res => {
        this.submitted = false;
        console.log(res.signInUserSession.accessToken.payload["cognito:groups"]);
        let groups = res.signInUserSession.accessToken.payload["cognito:groups"];
        console.log(groups);
        if (groups.includes("ADMINS")) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/member']);
        }
      })
      .catch(err => {
        console.log(err);
        this.submitted = false;
        this.showMessages.error = true;
        this.errors.push(err.message);
      })
  }

}
