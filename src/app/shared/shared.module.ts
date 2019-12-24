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




@NgModule({
  imports: [
    CommonModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    // Router
    RouterModule
  ],
  declarations: [HeaderComponent, LengthLimitPipe, LeftSideBarComponent, RightSideBarComponent],
  providers: [
    HttpService
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
    RightSideBarComponent
  ]
})
export class SharedModule { }


