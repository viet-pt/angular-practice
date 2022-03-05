import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnlyNumber, ClickOutside, MaxlengthCkeditor } from 'app/directives';
import { RestrictSpecialChar } from './restrict-special-char.directive';

@NgModule({
  declarations: [
    OnlyNumber,
    ClickOutside,
    RestrictSpecialChar,
    MaxlengthCkeditor,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OnlyNumber,
    ClickOutside,
    RestrictSpecialChar,
    MaxlengthCkeditor
  ]
})

export class DirectivesModule {}
