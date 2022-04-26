import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DurantePageRoutingModule } from './durante-routing.module';

import { DurantePage } from './durante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DurantePageRoutingModule
  ],
  declarations: [DurantePage]
})
export class DurantePageModule {}
