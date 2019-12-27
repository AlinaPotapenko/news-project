import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ArticlePageComponent } from './article-page.component';


const ROUTES: Routes = [
  {
    path: '',
    component: ArticlePageComponent
  }
]

@NgModule({
  declarations: [ArticlePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  providers: []
})
export class ArticlePageModule { }
