import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent
  },
  {
    path: 'reset-success',
    component: ResetSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
