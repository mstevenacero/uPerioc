import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { File }from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import { DocumentViewer} from '@ionic-native/document-viewer/ngx';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { EstadistitComponent } from './componets/estadistit/estadistit.component';
import { AdminComponent } from './componets/admin/admin.component';
import { DiagramComponent } from './componets/diagram/diagram.component';
import { PolarComponent } from './componets/polar/polar.component';
import { AlertUsersComponent } from './componets/alert-users/alert-users.component';


@NgModule({
  declarations: [AppComponent,
    EstadistitComponent,
    AdminComponent,
    DiagramComponent,
    PolarComponent,
    AlertUsersComponent
  ],
  entryComponents: [],
  imports: [ CommonModule,BrowserModule,HttpClientModule,ReactiveFormsModule,IonicModule.forRoot(), AppRoutingModule,NgChartsModule],
  exports:[EstadistitComponent,AdminComponent,DiagramComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },File, FileTransfer, DocumentViewer ],
  bootstrap: [AppComponent],
})
export class AppModule {}
