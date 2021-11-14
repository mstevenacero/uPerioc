import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogTwoPage } from './log-two.page';

const routes: Routes = [
  {
    path: '',
    component: LogTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogTwoPageRoutingModule {}
