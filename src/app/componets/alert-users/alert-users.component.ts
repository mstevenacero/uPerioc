import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-alert-users',
  templateUrl: './alert-users.component.html',
  styleUrls: ['./alert-users.component.scss'],
})
export class AlertUsersComponent implements OnInit {
  id:any
  usersId:any
  dataAlerts:any[]=[]

  constructor(private _httpService:RestService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id')
    console.log("tipo",typeof(this.id));
   this.getAlertUser(this.id)

  }

  getAlertUser(id){
    this._httpService.getOne('alerts_users/alert',id).subscribe(
      response => {
        if (!response) {

          console.error('Error: no se encontro usuario');
        } else {
          this.usersId = response
          console.log("response",this.usersId.data);
          
          const mapUser  = this.usersId.data.map(item=>{

            let dataObjet={
              create:item.createdAt,
              data:item.description_alerts,
              symptons:item.symptoms_user.data
            }
             this.dataAlerts.push(dataObjet)
      
          })
  
          
        }
      }
    );

  }


}
