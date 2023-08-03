import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {
  @Input() textKey: string = '';
  @Input() styles: { [key: string]: string } ;

  constructor(
    private translate: TranslateService
  ) { 
    this.styles = {};
  }

  ngOnInit() {}


  getTranslatedText(): string {
    return this.translate.instant(this.textKey);
  }

}
