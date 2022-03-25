import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChartData, ChartType } from 'chart.js';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
})
export class DiagramComponent implements OnInit {
  _dataUser:any
  userData:any
  numberUser:null
  numberSintoms:null
  constructor(  private _httpService: RestService,
    private _alertControl: AlertController,
    private router:Router) { }

  ngOnInit(
  ) {
    this.getUsers()
    this.getAlerts()
  }

  getUsers() {
    this._httpService.get('users').subscribe(
      response => {
        if (!response) {
          console.error('Error: de traer los sintomas de usuario');
        } else {
          this._dataUser=response
          console.log("response de alerta",this._dataUser.data.length);
           this.numberUser = this._dataUser.data.length
           this.userData = this._dataUser.data
        }
        console.log('se  agrego el usuario');
      }
    );


  }
  getAlerts() {
    this._httpService.get('alerts_users').subscribe(
      response => {
        if (!response) {
          console.error('Error: de traer los sintomas de usuario');
        } else {
          this._dataUser=response
          console.log("response de alerta",this._dataUser.data.length);
           this.numberSintoms = this._dataUser.data.length

        }
        console.log('se  agrego el usuario');
      }
    );


  }

  localSend(id){
    localStorage.setItem('id',id);
    this.routerClick('alerts')

  }
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }
}
