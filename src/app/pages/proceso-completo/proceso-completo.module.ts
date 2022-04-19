import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesoCompletoPageRoutingModule } from './proceso-completo-routing.module';

import { ProcesoCompletoPage } from './proceso-completo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesoCompletoPageRoutingModule
  ],
  declarations: [ProcesoCompletoPage]
})
export class ProcesoCompletoPageModule {}
