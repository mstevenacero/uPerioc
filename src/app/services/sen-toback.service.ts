import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenTobackService {
  private variableInit = new BehaviorSubject('');
  private variableAlert = new BehaviorSubject('')
  currentInit = this.variableInit.asObservable();
  currentAlert = this.variableAlert.asObservable();
  constructor() { }

  changeInit(value){
    this.variableInit.next(value)
  }

  changeAlert(value){
    this.variableAlert.next(value)
  }


}
