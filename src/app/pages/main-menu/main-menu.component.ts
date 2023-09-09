import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common-services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent  implements OnInit {
  title: string = '';

  public menuItems = [
    {
      title: 'Registry',
      icon: 'person-add',
      path: '/registry'
    },
    {
      title: 'Gallery',
      icon: 'home',
      path: '/gallery'
    },
    {
      title: 'Loot Box',
      icon: 'home',
      path: '/loot-box'
    },
  ]

  constructor(
    private router: Router,
    private _authSrv: AuthService
  ) { }

  ngOnInit() {}



  setTitle(title: string) {
     this.title = title;
  }


  navigateToUserSettings() {
    this.router.navigate(['user-settings']);
  }



  public logout() {
      this._authSrv.logout();
  }


}
