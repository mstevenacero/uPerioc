import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-misprocesos',
  templateUrl: './misprocesos.page.html',
  styleUrls: ['./misprocesos.page.scss'],
})
export class MisprocesosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routerClick(link: string) {
  
    this.router.navigateByUrl(link);
  }

}
