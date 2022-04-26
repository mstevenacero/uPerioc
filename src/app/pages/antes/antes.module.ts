import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntesPageRoutingModule } from './antes-routing.module';

import { AntesPage } from './antes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntesPageRoutingModule
  ],
  declarations: [AntesPage]
})
export class AntesPageModule {}
