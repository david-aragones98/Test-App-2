import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StartMenuPageRoutingModule } from './start-menu-routing.module';
import { StartMenuPage } from './start-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartMenuPageRoutingModule
  ],
  declarations: [StartMenuPage]
})
export class StartMenuPageModule {}
