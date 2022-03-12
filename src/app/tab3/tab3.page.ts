import { Component, OnInit } from '@angular/core';
import { SenTobackService } from 'src/app/services/sen-toback.service';
import { DataObservableService } from '../services/data-observable.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  descriptionAlert: string;
  getAlert: string = ''
  getChange: boolean = false
  noAlerts: boolean = true
  dataUser: any
  dataFor: any[] = []
  user: any
  userJson: any
  dataAlerts: any
  userFor: any
  constructor(
    private _getAlert: SenTobackService,
    private _httpService: RestService,
    private _dataObservable: DataObservableService
  ) {
    this._getAlert.currentAlert.subscribe(item => {
      if (item != '') {
        this.descriptionAlert = item
        console.log("item ", this.descriptionAlert);
        this.getChange = true;
        this.noAlerts = false;
      }
    })
    if (this.getChange == true) {
      this.getAlert = this.descriptionAlert
    }
  }
  ionViewWillEnter(){
    this._getAlert.currentAlert.subscribe(item => {
      if (item != '') {
        this.descriptionAlert = item
        console.log("item ", this.descriptionAlert);
        this.getChange = true;
        this.noAlerts = false;
      }
    })
    if (this.getChange == true) {
      this.getAlert = this.descriptionAlert
    }
    console.log("este es el on");
    this._dataObservable.dataObjectSource.subscribe(data => this.dataUser = data
    )
    console.log("llego la data alsets: ", this.dataUser);
    this.dataUser.data = this.dataFor
    this.user = localStorage.getItem('user')
    console.log('user', this.user);
    this.userJson = JSON.parse(this.user)
    this.getAlerts(this.userJson.id)
  }
  ngOnInit() {
    /*console.log("este es el on");
    this._dataObservable.dataObjectSource.subscribe(data => this.dataUser = data
    )
    console.log("llego la data alsets: ", this.dataUser);
    this.dataUser.data = this.dataFor
    this.user = localStorage.getItem('user')
    console.log('user', this.user);
    this.userJson = JSON.parse(this.user)
    this.getAlerts(this.userJson.id)*/
  }
  getAlerts(item) {
    let id = item
    this._httpService.getOne('alerts_users/alert', id).subscribe(
      response => {
        if (!response) {
          console.error('Error: de traer los sintomas de usuario');
        } else {
          console.log("response de alerta", response);
          this.dataAlerts = response
          console.log(this.dataAlerts.data);
          this.userFor = this.dataAlerts.data
        }
        console.log('se  agrego el usuario');
      }
    );


  }

}
