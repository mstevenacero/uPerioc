import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'tipousuario',
    loadChildren: () => import('./pages/tipousuario/tipousuario.module').then( m => m.TipousuarioPageModule)
  },
  {
    path: 'listasintomas',
    loadChildren: () => import('./pages/listasintomas/listasintomas.module').then( m => m.ListasintomasPageModule)
  },
  {
    path: 'draw-anatomye',
    loadChildren: () => import('./pages/draw-anatomye/draw-anatomye.module').then( m => m.DrawAnatomyePageModule)
  },
  {
    path: 'descargarproceso',
    loadChildren: () => import('./pages/descargarproceso/descargarproceso.module').then( m => m.DescargarprocesoPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'nuevoproceso',
    loadChildren: () => import('./pages/nuevoproceso/nuevoproceso.module').then( m => m.NuevoprocesoPageModule)
  },
  {
    path: 'misprocesos',
    loadChildren: () => import('./pages/misprocesos/misprocesos.module').then( m => m.MisprocesosPageModule)
  },
  {
    path: 'lineatemporal',
    loadChildren: () => import('./pages/lineatemporal/lineatemporal.module').then( m => m.LineatemporalPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
