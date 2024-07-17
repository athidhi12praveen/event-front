import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  singleuser: any = {};

  useremail: any = {};

  userName: any = {};

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {}

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      console.log(`${email} ${password}`);

      const reqBody = { email, password };

      // api call for users
      this.api.loginApi(reqBody).subscribe({
        next: (res: any) => {
          console.log(res);
          this.singleuser = res.existingUser._id;
          this.useremail = res.existingUser.email;
          this.userName = res.existingUser.username;

          console.log(this.singleuser);
          localStorage.setItem('userId', this.singleuser);
          localStorage.setItem('usermail', this.useremail);
          localStorage.setItem('userName', this.userName);
          this.route.navigateByUrl(`users/${this.singleuser}/userview`);
        },
        error: (err: any) => {
          console.log(err);
        },
      });

      // api call for admin
      this.api.loginUrl(reqBody).subscribe({
        next: (res: any) => {
          console.log(res);
          this.route.navigateByUrl('admin/view');
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      alert('Invalid form');
    }
  }
}
