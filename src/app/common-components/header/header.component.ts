import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  public selectedLanguage: string = 'en';

  constructor(
     private translate: TranslateService
  ) { }

  ngOnInit() {}


  changeLanguage() {
    this.translate.use(this.selectedLanguage);
    debugger;
  }

}


