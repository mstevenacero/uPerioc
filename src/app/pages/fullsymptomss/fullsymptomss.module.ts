import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullsymptomssPageRoutingModule } from './fullsymptomss-routing.module';

import { FullsymptomssPage } from './fullsymptomss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullsymptomssPageRoutingModule
  ],
  declarations: [FullsymptomssPage]
})
export class FullsymptomssPageModule {}
