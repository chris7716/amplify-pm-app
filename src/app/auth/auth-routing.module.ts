import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { AdminProfileSetUpComponent } from './admin-profile-set-up/admin-profile-set-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitNewPasswordComponent } from './submit-new-password/submit-new-password.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'admin-profile-setup',
        component: AdminProfileSetUpComponent,
      },
      {
        path: 'forgot-passowrd',
        component: ForgotPasswordComponent,
      },
      {
        path: 'reset-password',
        component: SubmitNewPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'sign-in' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
