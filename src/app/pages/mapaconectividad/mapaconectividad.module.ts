import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaconectividadPageRoutingModule } from './mapaconectividad-routing.module';

import { MapaconectividadPage } from './mapaconectividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaconectividadPageRoutingModule
  ],
  declarations: [MapaconectividadPage]
})
export class MapaconectividadPageModule {}
