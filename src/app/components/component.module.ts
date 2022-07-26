import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputDropdownComponent } from './input-dropdown/input-dropdown.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'app/pipe/pipe.module';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    InputDropdownComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipeModule,
  ],
  exports: [
    ConfirmModalComponent,
    InputDropdownComponent,
  ]
})

export class ComponentsModule {}
