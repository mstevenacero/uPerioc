import { Component, OnInit ,Output,EventEmitter,ContentChild} from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { DataObservableService } from 'src/app/services/data-observable.service';
import { IonInput } from '@ionic/angular';

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
  showPassword = false;
  @ContentChild(IonInput) input: IonInput;
  constructor(private _httpService:RestService,private router:Router,private _dataObservable:DataObservableService) { }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
    
  }
  
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
          console.log("data enviada",response);
          this.router.navigateByUrl('tabs');
          console.log('se encontro usuario');

        }
      }
    );
  }

}
