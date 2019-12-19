import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { UiComponentsModule } from './ui-components.module';
import { HeaderComponent } from '../header/header.component';




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
  declarations: [HeaderComponent],
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
    HeaderComponent
  ]
})
export class SharedModule { }


