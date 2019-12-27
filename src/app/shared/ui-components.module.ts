import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragulaModule, DragulaService } from 'ng2-dragula';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxChartsModule,
    DragulaModule.forRoot()
  ],
  providers: [ DragulaService ],
  exports: [
    ButtonModule,
    CarouselModule,
    NgxChartsModule,
    DragulaModule
  ]
})
export class UiComponentsModule { }
