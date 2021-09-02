import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipousuarioPageRoutingModule } from './tipousuario-routing.module';

import { TipousuarioPage } from './tipousuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipousuarioPageRoutingModule
  ],
  declarations: [TipousuarioPage]
})
export class TipousuarioPageModule {}
