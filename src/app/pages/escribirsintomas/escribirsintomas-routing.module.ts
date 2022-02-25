import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscribirsintomasPage } from './escribirsintomas.page';

const routes: Routes = [
  {
    path: '',
    component: EscribirsintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscribirsintomasPageRoutingModule {}
