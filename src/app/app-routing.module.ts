import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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


  // {
  //   path: '',
  //   loadChildren: () => import('./pages/main-menu/main-menu.module').then( m => m.MainMenuModule)
  // },

  // {
  //   path: 'user-creation',
  //   loadChildren: () => import('./pages/user-creation/user-creation.module').then( m => m.UserCreationModule)
  // },
  // {
  //   path: 'email-confirmation',
  //   loadChildren: () => import('./pages/email-confirmation/email-confirmation.module').then( m => m.EmailConfirmationModule)
  // },
  // {
  //   path: 'error-page',
  //   loadChildren: () => import('./pages/error-page/error-page.module').then( m => m.ErrorModule)
  // },

  // {
  //   path: 'game',
  //   loadChildren: () => import('./pages/game/game.module').then( m => m.GamePageModule)
  // },
  // {
  //   path: 'gallery',
  //   loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryModule)
  // },
  //  {
  //   path: 'start-menu',
  //   loadChildren: () => import('./pages/start-menu/start-menu.module').then( m => m.StartMenuPageModule)
  // },
  // {
  //   path: 'loot-box',
  //   loadChildren: () => import('./pages/loot-box/loot-box.module').then( m => m.LootBoxModule)
  // },
  // {
  //   path: 'shop',
  //   loadChildren: () => import('./pages/shop/shop.module').then( m => m.ShopModule)
  // },
  // {
  //   path: 'detail-girl',
  //   loadChildren: () => import('./pages/detail-girl/detail-girl.module').then( m => m.DetailGirlPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
