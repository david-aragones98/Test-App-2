import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiPage1Page } from './api-page1.page';

const routes: Routes = [
  {
    path: '',
    component: ApiPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ApiPage1PageRoutingModule {  }
