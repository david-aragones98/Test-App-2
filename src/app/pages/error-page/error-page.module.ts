import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ErrorPageComponent } from './error-page.component';
import { ErrorPageRoutingModule } from './error-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorPageRoutingModule
  ],
  declarations: [ErrorPageComponent]
})
export class ErrorModule {}