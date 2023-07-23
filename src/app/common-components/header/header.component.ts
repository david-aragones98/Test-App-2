import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  public selectedLanguage: string = 'en';
  public segment: string = ''; 

  constructor(
     private translate: TranslateService,
     private router: Router
  ) { }

  ngOnInit() {}


  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }


  openSettings() {
     
  }

  segmentChanged(event: any) {
    // Here you can handle the segment change and navigate accordingly
    switch (event.detail.value) {
      case 'gallery':
        // Handle the navigation for the gallery segment
        console.log('Navigate to Gallery');
        this.router.navigate(['gallery']);
        break;
      case 'shop':
        // Handle the navigation for the shop segment
        console.log('Navigate to Shop');
        this.router.navigate(['shop']);
        break;
      case 'minigame':
        // Handle the navigation for the minigame segment
        console.log('Navigate to Minigame');
        this.router.navigate(['game']);
        break;
        case 'loot-box':
          // Handle the navigation for the minigame segment
          console.log('Navigate to Minigame');
          this.router.navigate(['loot-box']);
          break;
      default:
        break;
    }
  }

}


