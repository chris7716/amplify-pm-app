import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbSpinnerModule, NbToastrModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminProfileSetUpComponent } from './admin-profile-set-up/admin-profile-set-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SubmitNewPasswordComponent } from './submit-new-password/submit-new-password.component';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, AdminProfileSetUpComponent, ForgotPasswordComponent, SubmitNewPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
  ]
})
export class AuthModule { }
