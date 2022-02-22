import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,Platform } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  info: String[];
  isRecording = false;
  constructor(private router: Router, public navCtrl: NavController,
  private speechRecognition: SpeechRecognition,
  private plt: Platform, private _changeCd: ChangeDetectorRef){}
  startListening() {
    let options = {
      language: 'es-ES'
    }
    this.speechRecognition.startListening().subscribe(matches => {
      this.info = matches;
      this._changeCd.detectChanges();
    });
    this.isRecording = true;
  }
  lista(){
    this.router.navigate(['/listasintomas']);
  }
}
