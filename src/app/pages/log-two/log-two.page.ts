import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { Register } from 'src/app/modules/register';
import { SenTobackService } from 'src/app/services/sen-toback.service';
import {RestService} from '../../services/rest.service'

@Component({
  selector: 'app-log-two',
  templateUrl: './log-two.page.html',
  styleUrls: ['./log-two.page.scss'],
})
export class LogTwoPage implements OnInit {
  registro:Register ={
    name:"",
    email:"",
    eps:"",
    residencia:"",
    num_document:null,
    password:"",
    phone:null,
    movil:null,
    gener:"",
    date_of_birth:null,
    level_school:"",
    life_alone:"",
    grup_etni:"",
    vunerable_person:"",
    family_conection:null,

  }
  
  public isToggled: boolean = false;
 
  constructor( private _httpService:RestService,private router:Router, private document: DocumentViewer,
    private file: File, private transfer: FileTransfer, private platform: Platform, private _changeInit:SenTobackService) { }

    notify() {
      this.isToggled = !this.isToggled;
    }  

openLocalPdf(){
const options: DocumentViewerOptions = {
  title: 'politica'
}
this.document.viewDocument('assets/logos/Documento Anteproyecto.pdf', 'application/pdf', options);
}

  ngOnInit():void {
  }
  addUser(){
    this.registro
    //("registro",this.registro);
    
    this._httpService.post('users',this.registro).subscribe(
      response => {
        if (!response) {
          console.error('Error: de crear usuario');
        } else {
          const descripcionAlert = response['userAlertForm'].description_alerts;
          this._changeInit.changeAlert(descripcionAlert)
          const treuKeyAlert = response['alertSymptom']
          if(treuKeyAlert==true){
            this._changeInit.changeAlert(descripcionAlert)
          }
          //('se  agrego el usuario');

        }
      }
    );
  }
  
}
