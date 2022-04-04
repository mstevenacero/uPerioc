import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.page.html',
  styleUrls: ['./tipousuario.page.scss'],
})
export class TipousuarioPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }

}
