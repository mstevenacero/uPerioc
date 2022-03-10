import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoprocesoPage } from './nuevoproceso.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoprocesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoprocesoPageRoutingModule {}
