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
  dataFor: any
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
  ngOnInit() {
    this._dataObservable.$dataObjectSource.subscribe(data => this.dataUser = data
    )
    console.log("llego la data: ", this.dataUser);
    this.dataUser.data = this.dataFor
    this.getSymptoms(this.dataUser.data.id)
  }
  getSymptoms(item) {
    let id = item
    this._httpService.getOne('alerts_users/alert', id).subscribe(
      response => {
        if (!response) {
          console.error('Error: de crear usuario');
        } else {
          console.log("response", response);
        }
        console.log('se  agrego el usuario');
      }
    );


  }

}
