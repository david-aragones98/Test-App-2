import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartMenuPage } from './start-menu.page';

const routes: Routes = [
  {
    path: '',
    component: StartMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartMenuPageRoutingModule {}
