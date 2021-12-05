import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
 private objectSource = new BehaviorSubject<{}>({})
 $dataObjectSource = this.objectSource.asObservable();
  constructor() { }

  sendData(data:any){
    this.objectSource.next(data);

  }
}
