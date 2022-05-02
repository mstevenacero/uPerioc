import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
 private objectSource = new BehaviorSubject<{}>({})
 private symtompsFisi = new BehaviorSubject(false)
 private varialDescription = new BehaviorSubject<{}>({});
 private  varialAlert = new BehaviorSubject(false);
 dataObjectSource = this.objectSource.asObservable();
 dataSymptoms = this.symtompsFisi.asObservable();
 currentDescription = this.varialDescription.asObservable();
 currentAlert = this.varialAlert.asObservable();
  constructor() { }

  sendData(data:any){
    this.objectSource.next(data);

  }

  sendBoolean(data:boolean){
    this.symtompsFisi.next(data)
  }

  sendDescription(data:any){
    this.varialDescription.next(data);
  }

  sendAlert(data:boolean){
    this.varialAlert.next(data)
  }

}
