import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {  EmailConfirmationRoutingModule } from './email-confirmation-routing.module';
import { EmailConfirmationComponent } from './email-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailConfirmationRoutingModule
  ],
  declarations: [EmailConfirmationComponent]
})
export class EmailConfirmationModule {}