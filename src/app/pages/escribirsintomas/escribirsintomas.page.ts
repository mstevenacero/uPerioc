import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,Platform } from '@ionic/angular';
import { VoiceRecognitionService } from 'src/app/service/voice-recognition.service';


@Component({
  selector: 'app-escribirsintomas',
  templateUrl: './escribirsintomas.page.html',
  styleUrls: ['./escribirsintomas.page.scss'],
  providers: [VoiceRecognitionService]
})
export class EscribirsintomasPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController, public service: VoiceRecognitionService)
  {
    this.service.init()
  }

deleteText(){
  this.service.text ="";
}

  showToggle:boolean = true;
  showToggleFun(){
    if(this.showToggle == true){
      this.showToggle = false;
    }else{
      this.showToggle = true;
    }
  }
  startService(){
    this.service.start()
  }
 
  stopService(){
    this.service.stop()
  }
  ngOnInit() {
  }

}
