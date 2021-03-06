import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';
import { UiComponentsModule } from './ui-components.module';
import { HeaderComponent } from '../header/header.component';
import { LengthLimitPipe } from './pipes/length-limit.pipe';
import { LeftSideBarComponent } from '../left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from '../right-side-bar/right-side-bar.component';
import { LengthLimitForContentPipe } from './pipes/length-limit-for-content.pipe';


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
    UiComponentsModule
  ],
  declarations: [
    HeaderComponent, 
    LengthLimitPipe, 
    LeftSideBarComponent, 
    RightSideBarComponent,
    LengthLimitForContentPipe
  ],
  providers: [
    HttpService,
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
    LengthLimitForContentPipe,
    LeftSideBarComponent,
    RightSideBarComponent,
  ]
})
export class SharedModule { }


