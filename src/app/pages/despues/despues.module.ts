import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespuesPageRoutingModule } from './despues-routing.module';

import { DespuesPage } from './despues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespuesPageRoutingModule
  ],
  declarations: [DespuesPage]
})
export class DespuesPageModule {}
