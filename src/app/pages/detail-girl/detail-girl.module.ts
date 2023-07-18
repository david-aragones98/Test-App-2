import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailGirlPageRoutingModule } from './detail-girl-routing.module';

import { DetailGirlPage } from './detail-girl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailGirlPageRoutingModule
  ],
  declarations: [DetailGirlPage]
})
export class DetailGirlPageModule {}
