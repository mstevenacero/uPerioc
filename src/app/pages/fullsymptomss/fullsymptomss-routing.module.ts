import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullsymptomssPage } from './fullsymptomss.page';

const routes: Routes = [
  {
    path: '',
    component: FullsymptomssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullsymptomssPageRoutingModule {}
