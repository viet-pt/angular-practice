import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnlyNumber, ClickOutside } from 'app/directives';
import { RestrictSpecialChar } from './restrict-special-char.directive';

@NgModule({
  declarations: [
    OnlyNumber,
    ClickOutside,
    RestrictSpecialChar,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OnlyNumber,
    ClickOutside,
    RestrictSpecialChar,
  ]
})

export class DirectivesModule {}
