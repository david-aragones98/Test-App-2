import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MainMenuRoutingModule } from './main-menu-routing.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    MainMenuRoutingModule,
  ],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
