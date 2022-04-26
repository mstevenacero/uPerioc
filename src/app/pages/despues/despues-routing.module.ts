import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespuesPage } from './despues.page';

const routes: Routes = [
  {
    path: '',
    component: DespuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespuesPageRoutingModule {}
