import { Component, OnInit } from '@angular/core';
import { DataObservableService } from 'src/app/services/data-observable.service';
import { RestService } from 'src/app/services/rest.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-reporte-fechas',
  templateUrl: './reporte-fechas.page.html',
  styleUrls: ['./reporte-fechas.page.scss'],
})
export class ReporteFechasPage implements OnInit {
  dataUserDescription:any
  title=''
  user:any
  dataFor:any
  userSend:{}={}
  status:'' 
  date =''
  constructor(private _observableService:DataObservableService, private _httpService:RestService,public atrCtrl: AlertController) {
  }
//traer la descripcion y estad
// hacer un fornularion recativocon fecha
// localstorege traer el id 
//hacer un objeto y hacer post al la tabla
ionViewWillEnter(){

}
  ngOnInit() {
    this._observableService.currentDescription.subscribe(data=>{
      this.dataUserDescription= data;
    })
    //("data lllego del user",this.dataUserDescription);
    this.title = this.dataUserDescription['des']
    this.status = this.dataUserDescription['sta']
    this.user = localStorage.getItem('user')
    this.dataFor = JSON.parse(this.user)
    //(this.dataFor);

  }
  async showPromptAlert() {
    let alert = this.atrCtrl.create({
      header: '¿Quieres guardar estos datos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            //('Cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
           this.addDate();
          }
        }
      ]
    });
    (await alert).present();
  }
  addDate(){
    //("fecha",this.date);
    this.userSend={
      status:this.status,
      doctor:'Sin doctor',
      user_id:this.dataFor['id'],
      date_user:this.date,
      description:this.dataUserDescription['des']
    } 
    //("sendToBACKD",this.userSend);
    this._httpService.post('lineTimes',this.userSend).subscribe(
      response => {
        if (!response) {
          console.error('Error: de crear usuario');
        } else {
          //('se  agrego el usuario');

        }
      }
    );
    

  }





}
