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

  goToRegistry() {
    this.router.navigate(['registry']);
  }
  goToGame() {
    this.router.navigate(['game']);
  }
  goToStartMenu() {
    this.router.navigate(['start-menu']);
  }



}
