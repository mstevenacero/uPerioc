import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children:[
      {
        path: 'log-one',
        loadChildren: () => import('./../../pages/log-one/log-one.module').then( m => m.LogOnePageModule)
      },
      {
        path: 'log-two',
        loadChildren: () => import('./../../pages/log-two/log-two.module').then( m => m.LogTwoPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
