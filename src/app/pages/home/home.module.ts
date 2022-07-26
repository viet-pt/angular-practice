import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from 'app/directives/directives.module';
import { HomePage } from './home.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ComponentsModule } from 'app/components/component.module';
import { PipeModule } from 'app/pipe/pipe.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DirectivesModule,
    CKEditorModule,
    ComponentsModule,
    ReactiveFormsModule,
    PipeModule,
  ],
})
export class HomeModule {}
