import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisprocesosPageRoutingModule } from './misprocesos-routing.module';

import { MisprocesosPage } from './misprocesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisprocesosPageRoutingModule
  ],
  declarations: [MisprocesosPage]
})
export class MisprocesosPageModule {}
