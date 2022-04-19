import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteFechasPage } from './reporte-fechas.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteFechasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteFechasPageRoutingModule {}
