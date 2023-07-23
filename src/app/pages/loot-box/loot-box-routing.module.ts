import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LootBoxComponent } from './loot-box.component';

const routes: Routes = [
  {
    path: '',
    component: LootBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LootBoxRoutingModule { }
