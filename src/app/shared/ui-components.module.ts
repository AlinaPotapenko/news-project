import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports: [
    ButtonModule,
    CarouselModule
  ]
})
export class UiComponentsModule { }
