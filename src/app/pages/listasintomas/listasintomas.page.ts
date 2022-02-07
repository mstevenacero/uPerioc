import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { SenTobackService } from 'src/app/services/sen-toback.service';

@Component({
  selector: 'app-listasintomas',
  templateUrl: './listasintomas.page.html',
  styleUrls: ['./listasintomas.page.scss'],
})
export class ListasintomasPage implements OnInit {
  changeInitGet = ''
  symptonsData: any
  dataReturn: any
  enable:boolean = false
  constructor(private _changeInit: SenTobackService, private _httpService: RestService) {
    this._changeInit.currentInit.subscribe(item => {
      this.changeInitGet = item
    });
  }
  ///this.symptonsData.data[0].data_symptoms_poll['symptons'][0].nombre
  ///this.symptonsData.data[0].data_symptoms_poll['symptons'][0].description
  ngOnInit() {
    this.getSymptoms()
  }
  getSymptoms() {
    this.changeInitGet
    this._httpService.get('symptoms_polls').subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this.symptonsData = response;
          let dataTmp = this.symptonsData?.data[0]?.data_symptoms_poll['symptons']
          console.log("lista de sintomas", this.symptonsData?.data[0]?.data_symptoms_poll['symptons'][0].description);
          const dataSymptoms =  dataTmp.map(item => {
            console.log("sintromas mapeados", item);
            this.dataReturn = item
            return this.dataReturn
          })
          console.log("dataReturn",this.dataReturn);
          
          this.enable = true

        }
      }
    );



  }
}
