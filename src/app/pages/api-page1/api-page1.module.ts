import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiPage1PageRoutingModule } from './api-page1-routing.module';
import { ApiPage1Page } from './api-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiPage1PageRoutingModule
  ],
  declarations: [ApiPage1Page]
})
export class ApiPage1PageModule {}
