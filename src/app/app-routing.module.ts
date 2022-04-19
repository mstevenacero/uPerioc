import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componets/admin/admin.component';
import { EstadistitComponent } from './componets/estadistit/estadistit.component';
import { ComponentsModule } from './components/components.module';
import { DiagramComponent } from './componets/diagram/diagram.component';
import { PolarComponent } from './componets/polar/polar.component';
import { AlertUsersComponent } from './componets/alert-users/alert-users.component';

const routes: Routes = [

  { path: '', redirectTo: 'carga', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },
  {
    path: 'tipousuario',
    loadChildren: () => import('./pages/tipousuario/tipousuario.module').then(m => m.TipousuarioPageModule)
  },
  {
    path: 'listasintomas',
    loadChildren: () => import('./pages/listasintomas/listasintomas.module').then(m => m.ListasintomasPageModule)
  },
  {
    path: 'draw-anatomye',
    loadChildren: () => import('./pages/draw-anatomye/draw-anatomye.module').then(m => m.DrawAnatomyePageModule)
  },
  {
    path: 'descargarproceso',
    loadChildren: () => import('./pages/descargarproceso/descargarproceso.module').then(m => m.DescargarprocesoPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then(m => m.EditarperfilPageModule)
  },
  {
    path: 'nuevoproceso',
    loadChildren: () => import('./pages/nuevoproceso/nuevoproceso.module').then(m => m.NuevoprocesoPageModule)
  },
  {
    path: 'misprocesos',
    loadChildren: () => import('./pages/misprocesos/misprocesos.module').then(m => m.MisprocesosPageModule)
  },
  {
    path: 'lineatemporal',
    loadChildren: () => import('./pages/lineatemporal/lineatemporal.module').then(m => m.LineatemporalPageModule)
  },
  {
    path: 'escribirsintomas',
    loadChildren: () => import('./pages/escribirsintomas/escribirsintomas.module').then(m => m.EscribirsintomasPageModule)
  },
  {
    path: 'mapaconectividad',
    loadChildren: () => import('./pages/mapaconectividad/mapaconectividad.module').then(m => m.MapaconectividadPageModule)
  },
  {
    path: 'carga',
    loadChildren: () => import('./pages/carga/carga.module').then(m => m.CargaPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialPageModule)
  },
  {
    path: 'fullsymptomss',
    loadChildren: () => import('./pages/fullsymptomss/fullsymptomss.module').then(m => m.FullsymptomssPageModule)
  },
  { path: 'admin', component: AdminComponent },
  { path: 'estadistic', component: EstadistitComponent },
  { path: 'diagram', component: DiagramComponent },
  { path: 'polar', component: PolarComponent },
  { path: 'alerts', component:  AlertUsersComponent },
  {
    path: 'login-admin',
    loadChildren: () => import('./pages/login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'reporte-fechas',
    loadChildren: () => import('./pages/reporte-fechas/reporte-fechas.module').then( m => m.ReporteFechasPageModule)
  },  {
    path: 'proceso-completo',
    loadChildren: () => import('./pages/proceso-completo/proceso-completo.module').then( m => m.ProcesoCompletoPageModule)
  },



];
@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
