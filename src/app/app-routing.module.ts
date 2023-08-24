import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./paginaRegistro/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-creation',
    loadChildren: () => import('./paginaRegistro/user-creation/user-creation.module').then( m => m.UserCreationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginaRegistro/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'email-confirmation',
    loadChildren: () => import('./paginaRegistro/email-confirmation/email-confirmation.module').then( m => m.EmailConfirmationPageModule)
  },
  {
    path: 'error-page1',
    loadChildren: () => import('./paginaRegistro/error-page1/error-page1.module').then( m => m.ErrorPage1PageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
