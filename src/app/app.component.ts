import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Lazy load homepage
  rootPage:any = "HomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.setLanguage();
    });
  }

  setLanguage() {
    var userLang = navigator.language.split('-')[0];
    console.log("Language: " + userLang);
    userLang = /(en|de|it|fr|es)/gi.test(userLang) ? userLang : 'en';
    this.translate.use(userLang);
  }
}

