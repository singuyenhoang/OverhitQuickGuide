import { Component } from '@angular/core';
import { Utils } from './../../services/utils';
// import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public utils:Utils) {}

  setLanguage(lang): void {
  
    this.utils.setLaguage(lang);
  }
  ngOnInit() {
   // this.utils.BannerAd();
  }
}
