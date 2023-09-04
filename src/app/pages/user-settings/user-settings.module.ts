import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { UserSettingsComponent } from './user-settings.component';


@NgModule({
  declarations: [UserSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
