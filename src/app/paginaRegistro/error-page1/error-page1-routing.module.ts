import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPage1Page } from './error-page1.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPage1PageRoutingModule {}
