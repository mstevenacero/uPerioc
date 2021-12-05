import { Component ,OnInit} from '@angular/core';
import { DataObservableService } from '../services/data-observable.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 dataUser:any
  constructor(private _dataObservable:DataObservableService) {}

  ngOnInit(){
   this._dataObservable.$dataObjectSource.subscribe(data => this.dataUser = data
    )
    console.log("llego la data: ",this.dataUser);
    

  }
 
}

