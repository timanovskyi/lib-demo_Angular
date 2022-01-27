import { NgModule } from '@angular/core';
import { PosterComponent } from './poster/poster.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PosterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PosterComponent
  ]
})
export class TvmazeModule { }
