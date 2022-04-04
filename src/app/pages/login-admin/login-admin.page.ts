import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
  login={
    name:"",
    password:""
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  singIn(){
    console.log("login",this.login);
    let name = this.login.name
    let pass = this.login.password
    if(name=="superAdmin" && pass=="Ttgb1010@" ){
      this.router.navigateByUrl('estadistic');
    }else{
      window.alert("Usuario no existe")
    }
  }


}
