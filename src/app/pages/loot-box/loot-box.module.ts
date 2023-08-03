import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LootBoxRoutingModule } from './loot-box-routing.module';
import { LootBoxComponent } from './loot-box.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CommonComponentsModule } from 'src/app/common-components/common-components-module';

@NgModule({
  declarations: [ LootBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    LootBoxRoutingModule,
    CommonComponentsModule
  ],
  exports: [
    LootBoxComponent
  ]
})
export class LootBoxModule { }
