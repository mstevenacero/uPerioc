import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-durante',
  templateUrl: './durante.page.html',
  styleUrls: ['./durante.page.scss'],
})
export class DurantePage implements OnInit {
  getuser: any = []
  jsonUser: any = []
  status = 'durante'
  sendUser = {}
  data_form:any
  data:any
  constructor(private _http: RestService) { }

  ngOnInit() {
    this.getuser = localStorage.getItem('user')
    this.jsonUser = JSON.parse(this.getuser)
    this.sendUser = {
      status: this.status,
      user_id: this.jsonUser['id']
    }
    //("this.getuser",this.getuser);
    
    this.getStatus(this.sendUser);
  }
  getStatus(form: any) {
    //("form",form);
    
    this._http.getStatus('lineTimes/status/',form).subscribe(response => {

      if (response) {
        this.data_form = response
        this.data = this.data_form.data
      } else {
        //("ocurrio un error ");

      }

    })
  }

}
