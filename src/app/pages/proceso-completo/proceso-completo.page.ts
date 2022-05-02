import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-proceso-completo',
  templateUrl: './proceso-completo.page.html',
  styleUrls: ['./proceso-completo.page.scss'],
})
export class ProcesoCompletoPage implements OnInit {
  user:any
  user_form:any
  id_user:''
  data_form:any
  data:any
  constructor( private _restHttp:RestService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user')
    this.user_form = JSON.parse(this.user);
    this.id_user = this.user_form['id']
    //(this.id_user);
    this.getInfoUser(this.id_user);

  }
  getInfoUser(user_id){
    this._restHttp.getOne('lineTimes',user_id).subscribe(
      response=>{
        if(response){
          this.data_form = response
          this.data = this.data_form.data
          //(this.data);
          
        }else{
         
          
          //("Error al traer l informacion del usuario");
          
        }
      }
    )
     
  }

}
