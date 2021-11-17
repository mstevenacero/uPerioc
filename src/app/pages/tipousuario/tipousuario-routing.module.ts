import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipousuarioPage } from './tipousuario.page';

const routes: Routes = [
  {
    path: '',
    component: TipousuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipousuarioPageRoutingModule {}
