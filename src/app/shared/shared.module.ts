import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { UiComponentsModule } from './ui-components.module';
import { HeaderComponent } from '../header/header.component';
import { LengthLimitPipe } from '../length-limit.pipe';
import { LeftSideBarComponent } from '../left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from '../right-side-bar/right-side-bar.component';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { HotArticleService } from '../home-page/hot-news/hot-news.component';


@NgModule({
  imports: [
    CommonModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    // Router
    RouterModule,
    DragulaModule.forRoot()
  ],
  declarations: [HeaderComponent, LengthLimitPipe, LeftSideBarComponent, RightSideBarComponent],
  providers: [
    HttpService,
    DragulaService,
    HotArticleService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    UiComponentsModule,
    HeaderComponent,
    LengthLimitPipe,
    LeftSideBarComponent,
    RightSideBarComponent,
    DragulaModule
  ]
})
export class SharedModule { }


