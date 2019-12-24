import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxChartsModule
  ],
  exports: [
    ButtonModule,
    CarouselModule,
    NgxChartsModule
  ]
})
export class UiComponentsModule { }
