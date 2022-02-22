import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescargarprocesoPageRoutingModule } from './descargarproceso-routing.module';

import { DescargarprocesoPage } from './descargarproceso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescargarprocesoPageRoutingModule
  ],
  declarations: [DescargarprocesoPage]
})
export class DescargarprocesoPageModule {}
