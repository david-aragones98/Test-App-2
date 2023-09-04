import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title!: string; 
  
  public selectedLanguage: string = 'en';


  constructor(
     private translate: TranslateService,
     private router: Router
  ) { }

  ngOnInit() {}


  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }





}


