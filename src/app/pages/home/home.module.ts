import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from 'app/directives/directives.module';
import { HomePage } from './home.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

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
  ],
})
export class HomeModule {}
