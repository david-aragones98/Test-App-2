import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailGirlPage } from './detail-girl.page';

const routes: Routes = [
  {
    path: '',
    component: DetailGirlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailGirlPageRoutingModule {}
