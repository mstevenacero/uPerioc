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
  dataUser: any
  visible: boolean = false;
  dataNewReturn: any[] = []
  indexado: any[] = []
  logIndex: any;
  listBoolen: boolean = false
  ubication: string
  dataFor:any[] = []
  user:any
  constructor(
    private _changeInit: SenTobackService,
    private _httpService: RestService,
    private router: Router,
    private _dataObservable: DataObservableService,
    private _alertControl: AlertController) {
    this._changeInit.currentInit.subscribe(item => {
      this.changeInitGet = item
    });
    this.area = this.changeInitGet
  }
  ///this.symptonsData.data[0].data_symptoms_poll['symptons'][0].nombre
  ///this.symptonsData.data[0].data_symptoms_poll['symptons'][0].description
  ngOnInit() {
    this._dataObservable.dataSymptoms.subscribe(data => this.listBoolen = data)
    if (this.listBoolen == false) {
      this.getSymptoms()
    }
    if (this.listBoolen == true) {
      this.getSymptomsFisi();
    }
    this._dataObservable.dataObjectSource.subscribe(data => this.dataUser = data

    )
    console.log("llego la data: ", this.dataUser.data['id']);
    this.user = localStorage.getItem('user')
    this.dataFor = JSON.parse(this.user)
    console.log("data for", this.dataFor['id']);
    
  }
  getSymptoms() {
    this.listBoolen = false
    this.ubication = 'noFisico'
    this._httpService.getOne('symptoms_polls/ubication', this.ubication).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {

          this.symptonsData = response;
          const dataMapSymptoms = this.symptonsData?.data.map((item, index) => {
            console.log("item map", item['data_symptoms_poll'].symptons[0])
            let tmpSymtompsP = item['data_symptoms_poll'].symptons[0]
            this.dataReturn.push(tmpSymtompsP)
          })
          this.dataReturn
          console.log("lista de sintomas", this.symptonsData?.data[0].id);
          console.log("sintomas", this.symptonsData?.data);

        }
      }
    );
  }
  getSymptomsFisi() {
    this.ubication = 'fisico'
    this._httpService.getOne('symptoms_polls/ubication', this.ubication).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {

          this.symptonsData = response;
          const dataMapSymptoms = this.symptonsData?.data.map((item, index) => {
            console.log("item map", item['data_symptoms_poll'].symptons[0])
            let tmpSymtompsP = item['data_symptoms_poll'].symptons[0]
            this.dataReturn.push(tmpSymtompsP)
          })
          this.dataReturn
          console.log("lista de sintomas", this.symptonsData?.data[0].id);
          console.log("sintomas", this.symptonsData?.data);

        }
      }
    );
  }
  symptomsUser(value: any, index) {
    console.log("valor del boton", value, "get", this.changeInitGet)
    console.log("index", index);

    let returnSyTmp = {
      simptons: value,
      flag: this.symptonsData?.data[0].clasification,
      area: this.changeInitGet
    }
    this.dataUserSymptons.push(returnSyTmp)
    let userSyntomsTmpS = {
      data: this.dataUserSymptons
    }
    console.log(this.area);

    this.dataPost = {
      id_user: this.dataFor['id'],
      id_user_symptoms: this.symptonsData?.data[0].id_symptoms,
      flag: this.symptonsData?.data[0].clasification,
      data_symptoms: userSyntomsTmpS,
      descripcion: "na"
    }
    console.log("data Return", this.dataNewReturn);
    console.log("dataReturnBack", this.dataPost);
    //delete this.dataReturn[index]

  }
  addSymptonsUser() {
    console.log("data antes de enviarse", this.dataPost);

    this._httpService.post('symptoms', this.dataPost).subscribe(
      response => {
        if (!response) {

          console.error('Error: no se encontro usuario');
        } else {
          console.log("response", response);


          const treuKeyAlert = response['alertSymptom']
          if (treuKeyAlert == true) {
            const descripcionAlert = response['userAlertForm'].description_alerts;
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
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }



}
