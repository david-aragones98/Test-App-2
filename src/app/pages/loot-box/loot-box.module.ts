import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LootBoxRoutingModule } from './loot-box-routing.module';
import { LootBoxComponent } from './loot-box.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ LootBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    LootBoxRoutingModule
  ],
  exports: [
    LootBoxComponent
  ]
})
export class LootBoxModule { }
