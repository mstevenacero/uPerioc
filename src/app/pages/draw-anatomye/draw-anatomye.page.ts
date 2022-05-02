import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SenTobackService } from 'src/app/services/sen-toback.service';
import { DataObservableService } from 'src/app/services/data-observable.service';

@Component({
  selector: 'app-draw-anatomye',
  templateUrl: './draw-anatomye.page.html',
  styleUrls: ['./draw-anatomye.page.scss'],
})
export class DrawAnatomyePage implements OnInit {
  changeInitPost = ''
  WIDTH = 623;
  HEITH = 939;
  point = 0;
  position: null;
  disable: boolean = true
  change: boolean = false
  changeAnatomy: boolean = true
  constructor(private router: Router,
    private _changeInit: SenTobackService,
    private _booleanService:DataObservableService        
    ) {

    this._changeInit.currentInit.subscribe(item => {
      this.changeInitPost = item
    });
  }

  ngOnInit() {
  }
  getClick() {
    this.change = true
    this.changeAnatomy = false
    this.disable = false
    this._booleanService.sendBoolean(true)
  }
  backClick() {
    this.change = false
    this.changeAnatomy = true
    this.disable = true

  }
  nextPage() {
    //("cabeza", this.position);
    this.changeInitPost = this.position
    const newInitTmp = this.changeInitPost;
    this._changeInit.changeInit(newInitTmp);
    this.router.navigateByUrl('listasintomas');
    //behaivor subjcet 

  }
  pageNext(){
    this.router.navigateByUrl('listasintomas');
  }

}
