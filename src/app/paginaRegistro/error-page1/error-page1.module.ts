import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorPage1PageRoutingModule } from './error-page1-routing.module';

import { ErrorPage1Page } from './error-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorPage1PageRoutingModule
  ],
  declarations: [ErrorPage1Page]
})
export class ErrorPage1PageModule {}
