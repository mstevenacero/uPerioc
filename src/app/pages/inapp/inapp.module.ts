import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InappPageRoutingModule } from './inapp-routing.module';

import { InappPage } from './inapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InappPageRoutingModule
  ],
  declarations: [InappPage]
})
export class InappPageModule {}
