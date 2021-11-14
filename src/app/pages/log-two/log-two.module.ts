import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogTwoPageRoutingModule } from './log-two-routing.module';

import { LogTwoPage } from './log-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogTwoPageRoutingModule
  ],
  declarations: [LogTwoPage]
})
export class LogTwoPageModule {}
