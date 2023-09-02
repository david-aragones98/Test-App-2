import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistryService } from './registry.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common-services/auth.service';
import { switchMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {
  public  registerForm!: FormGroup;


  constructor(
    private router: Router,
    private _registerSrv: RegistryService,
    private fb : FormBuilder,
    private _authSrv: AuthService
    ) { }

  goToLogin() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
       this.registerForm = this.fb.group({
        email: [null, Validators.required],
        username: [null, Validators.required],
        password: [null, Validators.required],
      });
  }


  onSubmit() {
    const emailValue = this.registerForm.controls['email'].value;
    if (emailValue) {
     const email = {
        email: emailValue
     }
      this._registerSrv.createRegister(email)     
      .subscribe((res: any) => {
        const confirmationToken = res.token;
      this._authSrv.setAuthToken(confirmationToken);
      const completeRegister = this.registerForm.value; 
      completeRegister.confirmationToken = confirmationToken;
      this._registerSrv.completeRegister(completeRegister).subscribe((secondRes: any) => {
        if(secondRes) {
          console.log('secondRes::', secondRes);
          this.goToLogin();
        }
      })
      });
      
      
  
      
      
 
    }
  }

}
