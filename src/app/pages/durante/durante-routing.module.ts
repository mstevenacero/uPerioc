import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DurantePage } from './durante.page';

const routes: Routes = [
  {
    path: '',
    component: DurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DurantePageRoutingModule {}
