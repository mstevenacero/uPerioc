import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesoCompletoPage } from './proceso-completo.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesoCompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesoCompletoPageRoutingModule {}
