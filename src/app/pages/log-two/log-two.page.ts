import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
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
  
 
  constructor( 
    private _httpService:RestService,
    private router:Router,
    private _changeInit:SenTobackService) { }
  ngOnInit():void {
  }
  addUser(){
    this.registro
    console.log("registro",this.registro);
    
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
          console.log('se  agrego el usuario');

        }
      }
    );
  }
  
}
