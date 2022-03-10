import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,Platform } from '@ionic/angular';
import { VoiceRecognitionService } from '../service/voice-recognition.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [VoiceRecognitionService]
})
export class Tab2Page {
  constructor(private router: Router, public navCtrl: NavController, public service: VoiceRecognitionService){
    this.service.init()
  }

 ngOnInit(): void {
 }
  
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }
}
