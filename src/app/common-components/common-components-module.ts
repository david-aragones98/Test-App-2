import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { GoBackComponent } from './go-back/go-back.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    LoadingComponent,
    GoBackComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [CommonModule, IonicModule],
})
export class CommonComponentsModule {}
