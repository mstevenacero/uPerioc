import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { SenTobackService } from 'src/app/services/sen-toback.service';
import { DataObservableService } from '../../services/data-observable.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-listasintomas',
  templateUrl: './listasintomas.page.html',
  styleUrls: ['./listasintomas.page.scss'],
})
export class ListasintomasPage implements OnInit {
  changeInitGet = ''
  symptonsData: any
  dataReturn: any[] = []
  dataUserSymptons: any[] = []
  enable: boolean = false
  dataPost = {}
  area: string
  dataUser:any
  constructor(
    private _changeInit: SenTobackService, 
    private _httpService: RestService, 
    private router: Router,
    private _dataObservable:DataObservableService,
    private _alertControl:AlertController) {
    this._changeInit.currentInit.subscribe(item => {
      this.changeInitGet = item
    });
    this.area = this.changeInitGet
  }
  ///this.symptonsData.data[0].data_symptoms_poll['symptons'][0].nombre
  ///this.symptonsData.data[0].data_symptoms_poll['symptons'][0].description
  ngOnInit() {
    this.getSymptoms()
    this._dataObservable.$dataObjectSource.subscribe(data => this.dataUser = data
      )
      console.log("llego la data: ",this.dataUser.data['id']);
  }
  getSymptoms() {
    this._httpService.get('symptoms_polls').subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this.symptonsData = response;
          this.dataReturn = this.symptonsData?.data[0]?.data_symptoms_poll['symptons']
          console.log("lista de sintomas", this.symptonsData?.data[0].id);

        }
      }
    );
  }
  symptomsUser(value: any) {
    console.log("valor del boton", value, "get", this.changeInitGet);
    let returnSyTmp = {
      simptons: value,
      area: this.changeInitGet
    }
    this.dataUserSymptons.push(returnSyTmp)
    let userSyntomsTmpS = {
      data: this.dataUserSymptons
    }
    console.log(this.area);

    this.dataPost = {
      id_user: this.dataUser.data['id'],
      id_user_symptoms:this.symptonsData?.data[0].id,
      flag: this.area,
      data_symptoms: userSyntomsTmpS,
      descripcion: "n/a"
    }
    console.log("dataReturnBack", this.dataPost);


  }
  addSymptonsUser() {
    this.dataPost
    this._httpService.post('symptoms', this.dataPost).subscribe(
      response => {
        if (!response) {
 
          console.error('Error: no se encontro usuario');
        } else {
          console.log("response",response);
         
          const descripcionAlert = response['userAlertForm'].description_alerts;
          const treuKeyAlert = response['alertSymptom']
          if(treuKeyAlert==true){
            this._changeInit.changeAlert(descripcionAlert)
            this.presentAlert()
          }
          //traer el el respose con alerta y  mandarla alertas
          this.routerClick('tabs')

        }
      }
    );
  }

  async presentAlert() {
    const alert = await this._alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '!Ojo!',
      message: 'tienes una alerta,mira el apartado de alertas',
      buttons: ['OK']
    });

    await alert.present();
    this.routerClick('tabs')

  }
  routerClick(link:string){
    this.router.navigateByUrl(link);
  }

}
