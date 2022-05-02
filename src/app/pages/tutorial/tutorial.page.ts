import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }
}
