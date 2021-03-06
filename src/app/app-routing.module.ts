import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTING: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./article-page/article-page.module').then(m => m.ArticlePageModule)
  }
];
const rootRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTING);

@NgModule({
  imports: [
    rootRouting
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
