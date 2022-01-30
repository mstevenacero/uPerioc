import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draw-anatomye',
  templateUrl: './draw-anatomye.page.html',
  styleUrls: ['./draw-anatomye.page.scss'],
})
export class DrawAnatomyePage implements OnInit {
  WIDTH = 623;
  HEITH = 939;
  point = 0;
  position: null;
  disable: boolean = true
  change: boolean = false
  changeAnatomy: boolean = true
  constructor(private router:Router) { }

  ngOnInit() {
  }

  clickAnatomy(point, x, y) {


  }

  getClick() {
    this.change = true
    this.changeAnatomy = false
    this.disable = false
    console.log("cabeza", this.position);

  }
  backClick() {
    this.change = false
    this.changeAnatomy = true
    this.disable = true

  }
  nextPage(){
    this.router.navigateByUrl('listasintomas');

  }
  /*<h6 (click)="getClick('cabeza')" value="Cabeza" class="select">1</h6>
    <h6  (click)="getClick('rostro')" class="select">2</h6>
    <h6  (click)="getClick('cuello')" class="select">3</h6>
    <h6  (click)="getClick('brazoIz')" class="select">4</h6>
    <h6  (click)="getClick('brazoDere')" class="select">5</h6>
    <h6  (click)="getClick('toraxIz')" class="select">6</h6>
    <h6  (click)="getClick('toraxDere')" class="select">7</h6>
    <h6  (click)="getClick('toraxDere')" class="select">8</h6>
    <h6  (click)="getClick('cuadreSupeDerec')" class="select">8</h6>
    <h6  (click)="getClick('cuadreIzqDerec')" class="select">9</h6>
    <h6  (click)="getClick('cuadreinfeDerec')" class="select">10</h6>
    <ion-item class="items">*/

}
