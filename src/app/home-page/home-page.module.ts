import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HotNewsComponent } from './hot-news/hot-news.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [HomePageComponent, HotNewsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ], 
  exports: [
    SharedModule
  ]
})
export class HomePageModule { }
