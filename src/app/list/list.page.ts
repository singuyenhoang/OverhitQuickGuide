import { Component, OnInit } from '@angular/core';
import {NavController} from  '@ionic/angular';
import { HeroDetailPage } from '../hero-detail/hero-detail.page';
import { Utils } from './../../services/utils';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private heros: any;
  //public items:     Array<{ name: string; tier: string; element: string; type: string; class: string; img: string; }> = [];
  //public itemsCopy: Array<{ name: string; tier: string; element: string; type: string; class: string; img: string; }> = [];
  public items:any =[];
  public itemsCopy:any = [];
  public searchTerm: String;

  public searchUR: any;
  public searchSSR: any;
  public searchSR: any;
  public searchFire: any;
  public searchWater: any;
  public searchWind: any;
  public searchLight: any;
  public searchDark: any;
  public searchTank: any;
  public searchFight: any;
  public searchAssist: any;


  constructor(public navCtrl: NavController,  public utils:Utils) {
  }

  search(): void {
    let term = this.searchTerm;

    let searchUR = this.searchUR;
    let searchSSR = this.searchSSR;
    let searchSR = this.searchSR;
    let searchFire = this.searchFire;
    let searchWater = this.searchWater;
    let searchWind = this.searchWind;
    let searchLight = this.searchLight;
    let searchDark = this.searchDark;
    let searchTank = this.searchTank;
    let searchFight = this.searchFight;
    let searchAssist = this.searchAssist;

    this.items = this.itemsCopy.filter(function(tag) {
        let ret= true;
        //Search by term
        let retTerm=(term?tag.name.toUpperCase().indexOf(term.toUpperCase()) >= 0:true);

        //Search by tier
        let retTier=(searchUR==true?(tag.tier=="UR"?true:false):false);
        retTier=retTier||(searchSSR==true?(tag.tier=="SSR"?true:false):false);
        retTier=retTier||(searchSR==true?(tag.tier=="SR"?true:false):false);
        retTier=retTier||(((!searchUR) && (!searchSSR) && (!searchSR))?true:false);

        //Search by element
        //let retElement=false;
        let retElement=(searchFire==true?(tag.element=="Fire"?true:false):false);
        retElement=retElement||(searchWater==true?(tag.element=="Water"?true:false):false);
        retElement=retElement||(searchWind==true?(tag.element=="Wind"?true:false):false);
        retElement=retElement||(searchLight==true?(tag.element=="Light"?true:false):false);
        retElement=retElement||(searchDark==true?(tag.element=="Dark"?true:false):false);
        retElement=retElement||((!searchFire && !searchWater && !searchWind && !searchLight && !searchDark)?true:false);

        //Search by class
        let retClass=(searchTank==true?(tag.class=="Tank"?true:false):false);
        retClass=retClass||(searchFight==true?(tag.class=="Fight"?true:false):false);
        retClass=retClass||(searchAssist==true?(tag.class=="Assist"?true:false):false);
        retClass = retClass||(((!searchTank) && (!searchFight) && (!searchAssist))?true:false);

        return ret&&retTerm&&retTier&&retElement&&retClass;
    }); 
  }

  goDetail(name): void {
    this.navCtrl.navigateForward('/hero-detail/' + name);
  }

  ngOnInit() {
    this.searchUR = false;

    this.heros = this.utils.getHeroData();

    for (let i = 0; i < this.heros.length; i++) {
      this.items.push({
        name: this.heros[i].name,
        tier:this.heros[i].tier,
        tierImg: '/assets/images/'+  this.heros[i].tier + '.png',
        element: this.heros[i].element,
        elementImg: '/assets/images/'+  this.heros[i].element + '.png',
        type:  this.heros[i].type,
        typeImg: '/assets/images/'+  this.heros[i].type + '.png',
        class: this.heros[i].class,
        classImg: '/assets/images/'+  this.heros[i].class + '.png',
        img:  '/assets/images/'+  this.heros[i].name + '.png'
      });
    }

    for (let i = 0; i < this.items.length; i++) {
       this.itemsCopy.push(this.items[i]);
    }

    //Show ADS
    this.utils.BannerAd();

    this.utils.InterstitialAd();
  }
}
