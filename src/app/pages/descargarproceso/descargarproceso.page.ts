import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descargarproceso',
  templateUrl: './descargarproceso.page.html',
  styleUrls: ['./descargarproceso.page.scss'],
})
export class DescargarprocesoPage implements OnInit {

  constructor(private router: Router) { }
  volver(){
    this.router.navigate(['/tab2']);
  }
  ngOnInit() {
  }

 

}
