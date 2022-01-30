import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawAnatomyePage } from './draw-anatomye.page';

const routes: Routes = [
  {
    path: '',
    component: DrawAnatomyePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawAnatomyePageRoutingModule {}
