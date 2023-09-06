import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/common-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm!: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _loginSrv: LoginService,
    private _authSrv: AuthService
  ) {}

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.value) {
      this._loginSrv
        .login(this.loginForm.value)
        .pipe(
          catchError((error: any) => {
            console.error('Error sending login:', error);
            return error;
          })
        )
        .subscribe((res: any) => {
          if (res) {
            const token = res.token;
            this._authSrv.setAuthToken(token);
            this.router.navigate(['gallery']);
          }
        });
    }
  }

  public initForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
}
