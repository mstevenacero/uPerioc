import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisprocesosPage } from './misprocesos.page';

const routes: Routes = [
  {
    path: '',
    component: MisprocesosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisprocesosPageRoutingModule {}
