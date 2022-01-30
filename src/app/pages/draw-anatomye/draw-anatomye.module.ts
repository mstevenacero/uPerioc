import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrawAnatomyePageRoutingModule } from './draw-anatomye-routing.module';

import { DrawAnatomyePage } from './draw-anatomye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrawAnatomyePageRoutingModule
  ],
  declarations: [DrawAnatomyePage]
})
export class DrawAnatomyePageModule {}
