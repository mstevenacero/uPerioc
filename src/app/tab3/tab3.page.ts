import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  alertSend:boolean= false
  constructor(
    private _getAlert: SenTobackService,
    private _httpService: RestService,
    private _dataObservable: DataObservableService,
    private router:Router
  ) {
    this._getAlert.currentAlert.subscribe(item => {
      if (item != '') {
        this.descriptionAlert = item
        //("item ", this.descriptionAlert);
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
        //("item ", this.descriptionAlert);
        this.getChange = true;
        this.noAlerts = false;
      }
    })
    if (this.getChange == true) {
      this.getAlert = this.descriptionAlert
    }
    //("este es el on");
    this._dataObservable.dataObjectSource.subscribe(data => this.dataUser = data
    )
    //("llego la data alsets: ", this.dataUser);
    this.dataUser.data = this.dataFor
    this.user = localStorage.getItem('user')
    //('user', this.user);
    this.userJson = JSON.parse(this.user)
    this.getAlerts(this.userJson.id)
  }
  ngOnInit() {
    /*//("este es el on");
    this._dataObservable.dataObjectSource.subscribe(data => this.dataUser = data
    )
    //("llego la data alsets: ", this.dataUser);
    this.dataUser.data = this.dataFor
    this.user = localStorage.getItem('user')
    //('user', this.user);
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
          //("response de alerta", response);
          this.dataAlerts = response
          //(this.dataAlerts.data);
          this.userFor = this.dataAlerts.data
        }
        //('se  agrego el usuario');
      }
    );


  }

  sendNewAlert(){
    this.alertSend = true;
    this._dataObservable.sendAlert(this.alertSend)
    this.routerClick('/escribirsintomas')
  }
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }

}
