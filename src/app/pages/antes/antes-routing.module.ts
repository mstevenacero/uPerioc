import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntesPage } from './antes.page';

const routes: Routes = [
  {
    path: '',
    component: AntesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntesPageRoutingModule {}
