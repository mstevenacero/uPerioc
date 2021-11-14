import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogOnePageRoutingModule } from './log-one-routing.module';

import { LogOnePage } from './log-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogOnePageRoutingModule
  ],
  declarations: [LogOnePage]
})
export class LogOnePageModule {}
