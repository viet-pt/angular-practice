import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnlyNumber, ClickOutside } from 'app/directives';

@NgModule({
  declarations: [
    OnlyNumber,
    ClickOutside,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OnlyNumber,
    ClickOutside,
  ]
})

export class DirectivesModule {}
