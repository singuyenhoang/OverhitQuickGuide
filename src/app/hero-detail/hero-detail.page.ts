import { Component, OnInit } from '@angular/core';
import { NavController} from  '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { Utils } from './../../services/utils';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
})
export class HeroDetailPage implements OnInit {
  model:any;
  
  constructor(public navCtrl: NavController, private route: ActivatedRoute, public utils:Utils) { }

  goDetail(name): void {
    this.navCtrl.navigateForward('/hero-detail/' + name);
  }

  ngOnInit() {

  	
    
  	let name= this.route.snapshot.params['hero-name'];
  	this.model = this.utils.getHeroInfoByName(name);
  
  
  	this.model.chainBuddies = [];
	
	if(this.model.inflictEffect!="")
  	{
  		let arrEffs =[];
  		if(this.model.inflictEffect.includes("|"))
  		{
  			arrEffs = this.model.inflictEffect.split("|");	
  		}
  		else
  		{
  			arrEffs.push(this.model.inflictEffect);
  		}


  		for(let k=0;k< arrEffs.length;k++)
  		{
  			let buddies= this.utils.getHeroesByChainEffect(arrEffs[k]);
	  		if(buddies.length>0)
	  		{
	  			for (let i=0;i<buddies.length;i++)
		    	{
		    		if(buddies[i].name != name)
		    		{
		    			this.model.chainBuddies.push({
		    			name:buddies[i].name,
		    			tier:buddies[i].tier,
		    			element:buddies[i].element,
		    			class:buddies[i].class, 
		    			type:buddies[i].type,
		    			chainSkill:buddies[i].chainEffectDesc,
		    			effect:arrEffs[k]
		    		});
		    		}
		    	}
	  		}
  		}
  		
  	}


  	if(this.model.chainEffect!="")
  	{
  		let buddies= this.utils.getHeroesByInflictEffect(this.model.chainEffect)
  		if(buddies.length>0)
  		{
  			for (let i=0;i<buddies.length;i++)
	    	{
	    		if(buddies[i].name != name)
	    		{

	    			let inflictEffDesc = buddies[i].inflictEffectDesc;

	    			//override inflictEffDesc if there are more than one description
	    			let arrEffDesc =[];
			  		if(buddies[i].inflictEffectDesc.includes("|"))
			  		{
			  			arrEffDesc = buddies[i].inflictEffectDesc.split("|");
			  			inflictEffDesc = arrEffDesc[0].includes(this.model.chainEffect)?arrEffDesc[0]:arrEffDesc[1];
			  		}

					this.model.chainBuddies.push({
	    			name:buddies[i].name,
	    			tier:buddies[i].tier,
	    			element:buddies[i].element,
	    			class:buddies[i].class, 
	    			type:buddies[i].type,
	    			chainSkill:inflictEffDesc,
	    			effect:this.model.chainEffect
	    		});
	    		}
	    	}
  		}
  	}

  	//Show ADS
    this.utils.BannerAd();

  }

}
