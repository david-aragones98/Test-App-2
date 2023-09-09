import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    children: [
    {
    path: 'gallery',
    loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryModule)
  },
    {
    path: 'loot-box',
    loadChildren: () => import('../loot-box/loot-box.module').then( m => m.LootBoxModule)
  },
  {
    path: 'registry',
    loadChildren: () => import('../registry/registry.module').then( m => m.RegistryPageModule)
  },
  {
    path: 'user-settings',
    loadChildren: () => import('../user-settings/user-settings.module').then( m => m.UserSettingsModule)
  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuRoutingModule {}