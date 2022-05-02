import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataObservableService } from '../services/data-observable.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  dataUser:any
  constructor(private router: Router,private _dataObservable:DataObservableService) { }

  ngOnInit(){
    this._dataObservable.dataObjectSource.subscribe(data => this.dataUser = data
      )

 
   }

   closeSesion(lnik){
    localStorage.clear();
    this.routerClick(lnik)
   }

   routerClick(link: string) {
    this.router.navigateByUrl(link);
}
}
