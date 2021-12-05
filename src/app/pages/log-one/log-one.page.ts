import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { DataObservableService } from 'src/app/services/data-observable.service';

@Component({
  selector: 'app-log-one',
  templateUrl: './log-one.page.html',
  styleUrls: ['./log-one.page.scss'],
})
export class LogOnePage implements OnInit {
  @Output() datos = new EventEmitter();
  registro={
    email:"",
    password:"",
  }

  constructor(private _httpService:RestService,private router:Router,private _dataObservable:DataObservableService) { }

  ngOnInit() {
  }
  LoginUp(){
    this.registro
    console.log("registro",this.registro);
    this._httpService.post('users/loginup/',this.registro).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this._dataObservable.sendData(response)
          console.log(response);
          this.router.navigateByUrl('tabs');
          console.log('se encontro usuario');

        }
      }
    );
  }

}
