import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title!: string; 
  isNavigated: boolean = false;
  
  public selectedLanguage: string = 'en';


  constructor(
     private translate: TranslateService,
     private router: Router
  ) { 

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.isNavigated = true;
      }
    })
  }

  ngOnInit() {}


  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }



}


