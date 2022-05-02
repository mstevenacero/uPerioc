import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  password=""
  email="";
  

  constructor(private _http:RestService, private router: Router,  private _alertControl: AlertController) { }

  ngOnInit() {
  }

  updatePass(){

    let userEmail={
      password:this.password
    }
    console.log(userEmail);
    

    this._http.update('users',this.email,userEmail).subscribe(response=>{
      try{
        console.log("Se acualizo la contraseña");
        this.presentAlert()
      }catch(error){
        console.log(error);    
      }
    })
  }
  async presentAlert() {
    const alert = await this._alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '!Felicidades!',
      message: 'Ya cambiaste tu contraseña',
      buttons: ['OK']
    });

    await alert.present();
    this.routerClick('login/log-one')

  }
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }


}
