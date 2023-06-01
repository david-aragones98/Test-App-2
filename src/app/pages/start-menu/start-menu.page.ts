import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.page.html',
  styleUrls: ['./start-menu.page.scss'],
})
export class StartMenuPage implements OnInit {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['login']);
  }
  goToGame() {
    this.router.navigate(['game']);
  }
  goToApiRest() {
    this.router.navigate(['api-page1']);
  }

  ngOnInit() {
  }

}




