import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmModalComponent } from 'app/components';

@NgModule({
  declarations: [
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConfirmModalComponent
  ]
})

export class ComponentsModule {}
