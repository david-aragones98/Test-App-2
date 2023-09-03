import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent  implements OnInit {

  public menuItems = [
    {
      title: 'Registry',
      icon: 'home',
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
    }
  ]

  constructor() { }

  ngOnInit() {}



  setTitle(title: string) {

  }

}
