import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoprocesoPageRoutingModule } from './nuevoproceso-routing.module';

import { NuevoprocesoPage } from './nuevoproceso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoprocesoPageRoutingModule
  ],
  declarations: [NuevoprocesoPage]
})
export class NuevoprocesoPageModule {}
