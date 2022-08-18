import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.router.navigate(['/auth/resetpassword']);
  }

  backToLogin() {
    this.router.navigate(['/auth/login']);
  }

}
