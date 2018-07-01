import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular'
@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal, public platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');
    
  }

  init(){
    if(this.platform.is('cordova')){
      this.oneSignal.startInit('966ce348-2582-48ca-9c9d-148646dba529', '979931407782');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        console.log("Notificación recibida")
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        console.log("Notificación abierta")
      });

      this.oneSignal.endInit();
    }else{
      console.log("No es un dispositivo movil :(")
    }
  }

}
