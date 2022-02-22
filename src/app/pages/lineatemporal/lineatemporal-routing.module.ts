import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineatemporalPage } from './lineatemporal.page';

const routes: Routes = [
  {
    path: '',
    component: LineatemporalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineatemporalPageRoutingModule {}
