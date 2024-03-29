import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { TranslateModule } from '@ngx-translate/core';
import { CommonComponentsModule } from 'src/app/common-components/common-components-module';
import { MainMenuModule } from '../main-menu/main-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    TranslateModule,
    CommonComponentsModule,
    MainMenuModule
  ],
  declarations: [LoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule {}
