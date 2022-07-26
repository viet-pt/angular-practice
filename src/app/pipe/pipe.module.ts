import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlPipe } from './form-control.pipe';

@NgModule({
  declarations: [
    FormControlPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormControlPipe,
  ]
})

export class PipeModule {}
