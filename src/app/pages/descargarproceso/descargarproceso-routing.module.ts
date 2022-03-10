import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescargarprocesoPage } from './descargarproceso.page';

const routes: Routes = [
  {
    path: '',
    component: DescargarprocesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargarprocesoPageRoutingModule {}
