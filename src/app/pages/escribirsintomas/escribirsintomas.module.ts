import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscribirsintomasPageRoutingModule } from './escribirsintomas-routing.module';

import { EscribirsintomasPage } from './escribirsintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscribirsintomasPageRoutingModule
  ],
  declarations: [EscribirsintomasPage]
})
export class EscribirsintomasPageModule {}
