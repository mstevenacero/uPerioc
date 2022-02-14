import { Component } from '@angular/core';
import { SenTobackService } from 'src/app/services/sen-toback.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  descriptionAlert: string;
  getAlert: string = ''
  getChange: boolean = false
  noAlerts:boolean= true
  constructor(private _getAlert: SenTobackService) {
    this._getAlert.currentAlert.subscribe(item => {
      if(item!=''){
      this.descriptionAlert = item
      console.log("item ",this.descriptionAlert);
      this.getChange = true;
      this.noAlerts= false;
    }
    })
    if (this.getChange == true) {
      this.getAlert = this.descriptionAlert
    }
  }
}
