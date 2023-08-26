import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserCreationComponent } from './user-creation.component';
import { UserCreationRoutingModule } from './users-creation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCreationRoutingModule
  ],
  declarations: [UserCreationComponent]
})
export class UserCreationModule {}