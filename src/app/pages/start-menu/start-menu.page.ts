import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.page.html',
  styleUrls: ['./start-menu.page.scss'],
})
export class StartMenuPage implements OnInit {

  ngOnInit() { }

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['login']);
  }


  goToGallery() {
    this.router.navigate(['gallery']);
  }

  goToShop() {
    this.router.navigate(['shop']);
  }
  goToMinigame() {
    this.router.navigate(['game']);
  }



}




