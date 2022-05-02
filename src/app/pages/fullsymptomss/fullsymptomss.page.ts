import { Component, OnInit } from '@angular/core';
import { DataObservableService } from 'src/app/services/data-observable.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-fullsymptomss',
  templateUrl: './fullsymptomss.page.html',
  styleUrls: ['./fullsymptomss.page.scss'],
})
export class FullsymptomssPage implements OnInit {
  dataUser:any
  dataSymptons:any[]=[]
  user:any
  dataFor:any[] = []
  dataFor2 = []
  change:boolean=false;
  _dataUser:any
  id:any
  constructor( private _dataObservable: DataObservableService,private _httpService: RestService) { }
  ionViewWillEnter(){

  }

  ngOnInit() {
    this.user = localStorage.getItem('user')
    this.dataFor = JSON.parse(this.user)
    //( "user",this.dataFor['id']);
    this.id = this.dataFor['id']
    this.getUsers(this.id)

  
  }
  clickToChange(){
    if(this.change ==false){      
      this.change=true
      return true
    }
    if(this.change==true){
      this.change=false
      return false
    }
  }
  getUsers(id) {
    this._httpService.getOne('symptoms/symptomsUsers',id).subscribe(
      response => {
        if (!response) {
          console.error('Error: de traer los sintomas de usuario');
        } else {
          this._dataUser=response
          //(this._dataUser.data);
          let dataForm = this._dataUser.data
          const data = dataForm.map((item,index)=>{
            //updatedAt
           let dataObjet={
             data:item.updatedAt,
             symptons:item.data_symptoms.data
           }
            this.dataSymptons.push(dataObjet)
          })

         /*for (let k = 0; k < this.dataFor2.length; k++) {
          //("diefre", this.dataFor2[k]);
          for(let i =0 ;i<this.dataFor2[k].length;i++){
            //("two",this.dataFor2[k][i]['simptons']);

            
          }
       }       */     
        }
      }
    );


  }
}
