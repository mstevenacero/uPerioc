import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
 private objectSource = new BehaviorSubject<{}>({})
 private symtompsFisi = new BehaviorSubject(false)
 dataObjectSource = this.objectSource.asObservable();
 dataSymptoms = this.symtompsFisi.asObservable();
  constructor() { }

  sendData(data:any){
    this.objectSource.next(data);

  }

  sendBoolean(data:boolean){
    this.symtompsFisi.next(data)
  }

}
