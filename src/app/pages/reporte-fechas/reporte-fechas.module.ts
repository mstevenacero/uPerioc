import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteFechasPageRoutingModule } from './reporte-fechas-routing.module';

import { ReporteFechasPage } from './reporte-fechas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteFechasPageRoutingModule
  ],
  declarations: [ReporteFechasPage]
})
export class ReporteFechasPageModule {}
