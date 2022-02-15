/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatSliderModule],
  exports: [ReactiveFormsModule, MatCardModule],
  providers: [],
})
export class SharedModule {}
