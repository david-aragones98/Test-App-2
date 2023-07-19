import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) { }

  signUp() {
    this.router.navigate(['registry']);
  }
  
  login() {
    this.router.navigate(['start-menu']);
  }



}
