import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/modules/register';
import {RestService} from '../../services/rest.service'

@Component({
  selector: 'app-log-two',
  templateUrl: './log-two.page.html',
  styleUrls: ['./log-two.page.scss'],
})
export class LogTwoPage implements OnInit {
  registro:Register ={
    name:"",
    email:"",
    eps:"",
    residencia:"",
    num_document:null,
    password:"",
  }
 
  constructor( private _httpService:RestService,private router:Router) { }
  ngOnInit():void {
  }
  addUser(){
    this.registro
    console.log("registro",this.registro);
    
    this._httpService.post('users',this.registro).subscribe(
      response => {
        if (!response) {
          console.error('Error: de crear usuario');
        } else {
          this.router.navigateByUrl('login/log-one');
          console.log('se  agrego el usuario');

        }
      }
    );
  }
  
}
