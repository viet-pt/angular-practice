import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from 'app/pages/not-found/not-found.page';
import { ROUTER_UTILS } from './router.utils';

const APP_ROUTES: Routes = [
  {
    path: ROUTER_UTILS.config.base.home,
    loadChildren: async () => (await import('app/pages/home/home.module')).HomeModule,
  },
  {
    path: '**',
    loadChildren: async () => (await import('app/pages/not-found/not-found.page')),
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class WebShellModule { }
