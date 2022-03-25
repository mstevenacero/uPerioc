import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lineatemporal',
  templateUrl: './lineatemporal.page.html',
  styleUrls: ['./lineatemporal.page.scss'],
})
export class LineatemporalPage implements OnInit {
 

  constructor(private router:Router) { }


  ngOnInit() {
  }
  routerClick(link: string) {

    this.router.navigateByUrl(link);
  }

}
