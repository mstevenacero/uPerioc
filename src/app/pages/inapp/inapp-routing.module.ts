import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InappPage } from './inapp.page';

const routes: Routes = [
  {
    path: '',
    component: InappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InappPageRoutingModule {}
