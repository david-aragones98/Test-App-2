import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registry',
    loadChildren: () => import('./pages/registry/registry.module').then( m => m.RegistryPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'start-menu',
    loadChildren: () => import('./pages/start-menu/start-menu.module').then( m => m.StartMenuPageModule)
  },
  {
    path: 'api-page1',
    loadChildren: () => import('./pages/api-page1/api-page1.module').then( m => m.ApiPage1PageModule)
  },
  {
    path: 'grid1',
    loadChildren: () => import('./pages/grid1/grid1.module').then( m => m.Grid1PageModule)
  },
  {
    path: 'detail-girl',
    loadChildren: () => import('./pages/detail-girl/detail-girl.module').then( m => m.DetailGirlPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
