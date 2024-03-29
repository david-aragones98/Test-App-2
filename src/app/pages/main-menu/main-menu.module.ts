import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MainMenuRoutingModule } from './main-menu-routing.module';
// import { HeaderModule } from 'src/app/common-components/header/header.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    // HeaderModule,
    MainMenuRoutingModule,
  ],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
