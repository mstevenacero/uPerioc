import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogOnePage } from './log-one.page';

const routes: Routes = [
  {
    path: '',
    component: LogOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogOnePageRoutingModule {}
