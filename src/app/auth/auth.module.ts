import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// routing modules
import { AuthRoutingModule } from './auth-routing.module';
// components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    // SignupComponent,
    ResetpasswordComponent,
    ResetSuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // routing module
    AuthRoutingModule
  ]
})
export class AuthModule { }
