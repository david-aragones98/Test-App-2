import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistryService } from './registry.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb : FormBuilder
    ) { }

  goToLogin() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
       this.registerForm = this.fb.group({
        email: ['', Validators.required],
      });
  }


  onSubmit() {
    if (this.registerForm?.valid) {
      this._registerSrv.createRegister(this.registerForm?.value).subscribe((res: any) => {
        if(res) {
          console.log('res-register::', res);
        }
    });
    }
  }

}
