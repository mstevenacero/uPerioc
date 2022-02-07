import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenTobackService {
  private variableInit = new BehaviorSubject('');
  currentInit = this.variableInit.asObservable();
  constructor() { }

  changeInit(value){
    this.variableInit.next(value)
  }
}
