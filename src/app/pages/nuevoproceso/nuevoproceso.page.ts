import { Component, OnInit } from '@angular/core';
import { DataObservableService } from 'src/app/services/data-observable.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-nuevoproceso',
  templateUrl: './nuevoproceso.page.html',
  styleUrls: ['./nuevoproceso.page.scss'],
})
export class NuevoprocesoPage implements OnInit {

  constructor( private _dataObservable:DataObservableService , private router:Router, private _httpService:RestService ) { }

  ngOnInit() {
  }
  descriptionStatus(description:string,status:string){
    let dataDescription ={
         des:description,
         sta:status
    }
    //("data description to send",dataDescription);
    this._dataObservable.sendDescription(dataDescription)
    this.router.navigateByUrl('reporte-fechas');
  }
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }
}
