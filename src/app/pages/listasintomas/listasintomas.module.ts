import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasintomasPageRoutingModule } from './listasintomas-routing.module';

import { ListasintomasPage } from './listasintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasintomasPageRoutingModule
  ],
  declarations: [ListasintomasPage]
})
export class ListasintomasPageModule {}
