import { Component ,OnInit} from '@angular/core';
import { DataObservableService } from '../services/data-observable.service';
import { Router } from '@angular/router';
import { SenTobackService } from '../services/sen-toback.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 dataUser:any
 userAlertPing:any;
 alertEneable:boolean=false
  constructor(private _dataObservable:DataObservableService,private router:Router,
    private _changeInit: SenTobackService) {
       this._changeInit.currentAlert.subscribe(data=>{
         if(data!=''){
        this.dataChageAlert(data);
      }
       })
    }
  ngOnInit(){
   this._dataObservable.$dataObjectSource.subscribe(data => this.dataUser = data
    )
    console.log("llego la data: ",this.dataUser);
    
  }
  dataChageAlert(item){
    this.alertEneable =true
    this.userAlertPing = item
  }
  nextPage(){
    this.router.navigateByUrl('draw-anatomye');
  }
  nextPageAlerts(){
    this.router.navigateByUrl('tabs/notifications')
  }
 
}

