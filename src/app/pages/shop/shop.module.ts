import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ShopRoutingModule } from './shop-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule,
    TranslateModule,
    IonicModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
