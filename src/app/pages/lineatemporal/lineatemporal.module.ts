import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineatemporalPageRoutingModule } from './lineatemporal-routing.module';

import { LineatemporalPage } from './lineatemporal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineatemporalPageRoutingModule
  ],
  declarations: [LineatemporalPage]
})
export class LineatemporalPageModule {}
