import { Injectable } from "@angular/core";
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
@Injectable()
export class Utils {
  HERO_DATA:any;
  HERO_DATA_VN:any;
  LANGUAGE:any;

  //Interstitial Ad's Configurations
    interstitialConfig: AdMobFreeInterstitialConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      //isTesting: true,
      autoShow: false,
      //id: "ca-app-pub-5927171719338167/8019027107" //not appstore
      //id: "ca-app-pub-3940256099942544/1033173712" //Google
      id: "ca-app-pub-5927171719338167/9137216396" //Appstore
    };
   
    //Reward Video Ad's Configurations
    RewardVideoConfig: AdMobFreeRewardVideoConfig = {
      //isTesting: true, // Remove in production
      autoShow: false,
      id: "ca-app-pub-5927171719338167/8384367929"
    };


    constructor( private admobFree: AdMobFree, public platform: Platform) {
    
      //Google ADMOD
      platform.ready().then(() => {
       if(cordova)
       {
            // Load ad configuration
            this.admobFree.interstitial.config(this.interstitialConfig);
            //Prepare Ad to Show
            this.admobFree.interstitial.prepare()
              .then(() => {
                // alert(1);
              }).catch();
       
       
            // Load ad configuration
            this.admobFree.rewardVideo.config(this.RewardVideoConfig);
            //Prepare Ad to Show
            this.admobFree.rewardVideo.prepare()
              .then(() => {
                // alert(2);
              }).catch();

       }
      });
 
    //Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => {
          //alert("Interstitial CLOSE");
        }).catch(e => alert(e));
    });
    //Handle Reward's close event to Prepare Ad again
    this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
      this.admobFree.rewardVideo.prepare()
        .then(() => {
         // alert("Reward Video CLOSE");
        }).catch(e => alert(e));
    });


    //Hero DATA
    this.LANGUAGE = "EN";

    this.HERO_DATA_VN=[
    {
      name:"Anemone",
      tier:"UR",
      element:"DarkFire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Đối với mỗi loại Anh hùng trong Đội của bạn, ATK của các anh hùng của bạn được tăng thêm 20%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 211% ATK cho Enemy x3. <br> [Hiệu ứng trạng thái]: Gây mù cho kẻ thù x3 trong 20 giây. (Tỷ lệ thành công: 50%)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 158,2% ATK cho Kẻ thù x5. <br> [Hiệu ứng dây chuyền]: Gây sát thương tương đương với 174,1% ATK cho kẻ địch bị ảnh hưởng bởi Blind",
      inflictEffect:"Blind",
      inflictEffectDesc:"Gây mù cho kẻ thù x3 trong 20 giây. (Tỷ lệ thành công: 50%)",
      chainEffect:"Blind",
      chainEffectDesc:"Gây sát thương tương đương với 174,1% ATK cho kẻ địch bị ảnh hưởng bởi Blind"
    },
    {
      name:"Riah",
      tier:"UR",
      element:"LightWind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Đối với mỗi loại Anh hùng trong Đội của bạn, hãy tăng 15% ATK cho đồng minh.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 336,7% ATK cho Enemy x1. <br> [Hiệu ứng trạng thái]: Chảy máu gây sát thương tương đương 11,5% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 100%) <br> (Chảy máu): Giảm 20% hồi máu.",
      skill2:"[Sát thương thường xuyên]: Sát thương gây ra bằng 352,3% ATK cho Kẻ thù x1. (Được đảm bảo quan trọng.) <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 211,4% ATK cho kẻ địch bị ảnh hưởng bởi Bleed.",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict Bleed gây sát thương tương đương 11,5% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 100%)",
      chainEffect:"Bleed",
      chainEffectDesc:"Gây thêm sát thương tương đương 211,4% ATK cho kẻ địch bị ảnh hưởng bởi Bleed."
    },
    {
      name:"Aglaea",
      tier:"SSR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh loại vật lý thêm 20%. <br> Tăng chỉ số DMG của các đồng minh loại vật lý thêm 10%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 315,9% ATK cho Enemy x3. (Tấn công liên tục Kẻ thù x3.) <br> [Hiệu ứng trạng thái]: Gây sát thương Chill gây sát thương tương đương 4,3% ATK mỗi 4s trong 36 giây. (Tỷ lệ thành công: 30%.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 305,5% ATK cho Enemy x1. (Được đảm bảo quan trọng.) <br> [Sát thương bổ sung]: Gây sát thương cố định là 790 cho kẻ địch bị ảnh hưởng bởi Chill.",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill gây sát thương tương đương 4,3% ATK mỗi 4s trong 36 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"Chill",
      chainEffectDesc:"Gây sát thương cố định là 790 cho kẻ địch bị ảnh hưởng bởi Chill."
    },
    {
      name:"Alex",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Tăng ATK của các đồng minh Light lên 40%.",
      skill1:"[Buff]: Tăng DEF của Ally x5 thêm 25,2%. (Tỷ lệ thành công: 100%, Thời lượng: 60 giây.) <br> [Buff]: Cast Barrier on Self chặn tối đa 667 + 9,6% giá trị thiệt hại ATK. (Tỷ lệ thành công: 100%. Thời lượng: 30 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 176,5% ATK cho Kẻ thù x3. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 72,5% DEF cho Kẻ thù x3.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Angelo",
      tier:"SSR",
      element:"Dark",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh bóng tối lên 40%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 166,7% ATK cho Enemy x4.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 184,8% ATK cho Kẻ thù x4. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 3,9% HP tối đa cho Kẻ thù x4. (Sát thương tối đa: 150% ATK.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Aria",
      tier:"SSR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng 20% ​​HP tối đa cho các đồng minh nước",
      skill1:"[Sát thương thường xuyên:] Gây sát thương tương đương với 251,7% ATK cho Kẻ thù x1. <br> [Debuff]: Giảm sát thương của kẻ thù x1 xuống 27,9%. (Tỷ lệ thành công: 50%, Thời lượng 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 248,4% ATK cho Enemy x1.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Ash",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của đồng minh thêm 25%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 245,5% ATK cho Enemy x1. <br> [Hiệu ứng trạng thái]: Gây sát thương gây sát thương tương đương 26,1% ATK cứ sau 10 giây trong 20 giây. (Tỷ lệ thành công: 30%.) <br> [Hiệu ứng dây chuyền]: Gây sát thương tương đương với 245,5% ATK cho kẻ địch bị ảnh hưởng bởi Poison. (Được đảm bảo quan trọng.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 211,8% ATK cho Enemy x3. <br> [Debuff]: Giảm ATK của Enemy x3 xuống 28,6%. (Thời lượng: 60 giây.)",
      inflictEffect:"Burn",
      inflictEffectDesc:"Inflict Burn gây sát thương tương đương 26,1% ATK cứ sau 10 giây trong 20 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Gây sát thương tương đương với 245,5% ATK cho kẻ địch bị ảnh hưởng bởi Poison. (Được đảm bảo quan trọng.)"
    },
    {
      name:"Beatrice",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất Ally x3 của các đồng minh Gió, hãy tăng 35% đồng minh ATK. <br> Tăng Crit DMG của các đồng minh thêm 10%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 252,6% ATK cho Kẻ thù x1. <br> [Hiệu ứng trạng thái]: Gây ra máu gây sát thương tương đương 9,3% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 80%.)",
      skill2:"[Sát thương thường xuyên]: Sát thương gây ra bằng 158,7% ATK cho Kẻ thù x3. (Được đảm bảo quan trọng.)",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict chảy máu gây sát thương tương đương 9,3% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 80%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Blossom",
      tier:"SSR",
      element:"Fire",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh Lửa lên 40%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 118,2% ATK cho Enemy x3.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 178,6% ATK cho Enemy x3.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Celesta",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh Gió lên 40%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 259,2% ATK cho Enemy x1. <br> [Debuff]: Giảm DEF của Enemy x1 xuống 27,9%. (Thời lượng 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 120% ATK cho Enemy x4. <br> [Hiệu ứng trạng thái]: Chảy máu gây sát thương tương đương 7,3% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 40%.)",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict Bleed gây sát thương tương đương 7,3% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 40%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Colette",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh nước lên 40%",
      skill1:"[Sát thương thông thường]: Gây sát thương tương đương với 167,4% ATK cho Kẻ thù x3. <br> [Debuff]: Giảm hiệu ứng trạng thái Chống lại tỷ lệ của kẻ thù x3 22,9%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 99,4% ATK cho Enemy x5. <br> [Hiệu ứng trạng thái]: Gây sát thương Chill gây sát thương tương đương 2,7% ATK mỗi 4s trong 36 giây. (Tỷ lệ thành công: 30%.)",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill gây sát thương tương đương 2,7% ATK mỗi 4s trong 36 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Demian",
      tier:"SSR",
      element:"Dark",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Tăng ATK của đồng minh thêm 25%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 215,5% ATK cho Kẻ thù x3. <br> [Chữa bệnh]: Tự chữa lành cho 170,1% ATK. <br> [Chữa bệnh bổ sung]: Ngoài ra còn chữa lành Ally x1 cho 27 , 2% HP tối đa. (Áp dụng hiệu ứng trên Ally x1 với HP thấp nhất, ngoại trừ bản thân.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 176,2% ATK cho Kẻ thù x4. <br> [Hiệu ứng trạng thái]: Gây mù cho kẻ thù x4 trong 20 giây. (Tỷ lệ thành công: 20%.)",
      inflictEffect:"Blind",
      inflictEffectDesc:"Gây mù cho kẻ thù x4 trong 20 giây. (Tỷ lệ thành công: 20%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Edmund",
      tier:"SSR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng 20% ​​ATK của Đồng minh loại ma thuật. <br> Tăng tỷ lệ chặn của đồng minh loại ma thuật lên 5%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 177,4% ATK cho Kẻ thù x3. <br> [Debuff]: Giảm tỷ lệ chặn của kẻ thù x3 xuống 11,8%. (Tỷ lệ thành công: 50%, Thời lượng: 40 giây.)",
      skill2:"[Sát thương thông thường]: Gây sát thương tương đương 103,1% ATK cho Enemy x5. <br> [Hiệu ứng trạng thái]: Infict Poison gây sát thương tương đương 9,2% ATK mỗi 6s trong 30 giây. (Tỷ lệ thành công: 20%. <br> (Ngộ độc): Giảm 20% hiệu ứng kháng trạng thái",
      inflictEffect:"Poison",
      inflictEffectDesc:"Infict Poison gây sát thương tương đương 9,2% ATK mỗi 6s trong 30 giây. (Tỷ lệ thành công: 20%.",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Elphie",
      tier:"SSR",
      element:"Fire",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Tăng chỉ số DMG của các đồng minh hỏa lực lên 30%",
      skill1:"[Chữa bệnh]: Chữa lành Ally x4 với 107,9% ATK. (Áp dụng hiệu ứng trên Ally x4 với HP thấp nhất.) <br> [Buff]: Tăng ATK của Ally x4 thêm 29,7% (Áp dụng hiệu ứng trên Ally x4 với HP thấp nhất.)",
      skill2:"[Buff]: Tăng tỷ lệ Crit của Ally x4 thêm 21%. (Trên các Đồng minh có ATK cao nhất, ngoại trừ Tự. Thời lượng: 60 giây.) <br> [Buff]: Xóa 1 Debuff khỏi Ally x1. (Áp dụng hiệu ứng trên Ally x1 với ATK cao nhất, không bao gồm tự.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Emodin",
      tier:"SSR",
      element:"Water",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Tăng DEF của đồng minh thêm 20%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 245,9% ATK cho Enemy x1. <br> [Debuff]: Giảm ATK của Enemy x1 xuống 23,5%. (Tỷ lệ thành công: 100%. Thời lượng: 60 giây.)",
      skill2:"[Buff]: Tăng ATK của Ally x5 thêm 20,9%. (Tỷ lệ thành công: 100%. Thời lượng: 60 giây.) <br> [Buff]: Cast Barrier on Self chặn tới 668 + 9,3% giá trị thiệt hại ATK. (Tỷ lệ thành công: 100%, Thời lượng: 30 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Esta",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh loại vật lý lên 30%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 169,8% ATK cho Enemy x3.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 177,2% ATK cho Kẻ thù x3. <br> [Sát thương bổ sung]: Gây sát thương cố định 414 cho Kẻ thù x1.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gleck",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Giảm 10% DMG của đồng minh",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 245% ATK cho Enemy x1. <br> [Debuff]: Giảm tỷ lệ xuyên thủng của kẻ thù x1 xuống 27,9%. (Thời lượng: 7 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 175,1% ATK cho Kẻ thù x3. <br> [Hiệu ứng trạng thái]: Gây choáng cho kẻ thù x3 trong 18 giây. (Tỷ lệ thành công: 30%.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gordon",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Tăng tối đa HP của đồng minh thêm 15%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 167,9% ATK cho Enemy x3. <br> [Debuff]: Giảm sát thương của kẻ thù x3 xuống 22,9%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 251,2% ATK cho Kẻ thù x1. <br> [Hiệu ứng trạng thái]: Đốt cháy gây sát thương tương đương 26,1% ATK cứ sau 10 giây trong 20 giây. (Tỷ lệ thành công: 80%.)",
      inflictEffect:"Burn",
      inflictEffectDesc:"Inflict Burn gây sát thương tương đương 26,1% ATK cứ sau 10 giây trong 20 giây. (Tỷ lệ thành công: 80%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Helena",
      tier:"SSR",
      element:"Light",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Tăng ATK thêm 30% cho 3 mục tiêu trở lên.",
      skill1:"[Chữa bệnh]: Chữa lành Ally x5 cho 98,5% ATK. <br> [Chữa bệnh bổ sung]: Ngoài ra chữa lành Ally x1 cho 34,1% ATK. (Áp dụng hiệu ứng trên Ally x1 với HP thấp nhất.)",
      skill2:"[Resurrection]: Resurrect Ally x1 với 30% HP. <br> [Buff]: Rào chắn trên Ally x4 có khả năng gây sát thương lên tới 550 + 8,1% ATK. (Thời lượng: 30 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Hien",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất 3x đồng minh Lửa, tăng 35% đồng minh ATK. <br> Tăng tỷ lệ phê bình của các đồng minh lên 5%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 256,5% ATK cho Kẻ thù x1. <br> [Hiệu ứng chuỗi]: Gây thêm sát thương hiệu quả cho 256,5% ATK khi kích hoạt chuỗi tấn công. (Được đảm bảo quan trọng) <br> [Hiệu ứng chuỗi]: Nếu kẻ địch bị tấn công bị ảnh hưởng bởi Burn, hãy gây ra Burn để gây sát thương bằng 22% ATK cứ sau 10 giây trong 20 giây trên Enemy x3. (Tỷ lệ thành công: 60%.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 177,9% ATK cho Kẻ thù x3. <br> [Debuff]: Giảm sát thương của kẻ thù x3 xuống 23,5%. (Tỷ lệ thành công: 30%, Thời lượng: 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Burn",
      chainEffectDesc:"Nếu kẻ địch bị tấn công bị ảnh hưởng bởi Burn, hãy gây ra Burn để gây sát thương bằng 22% ATK cứ sau 10 giây trong 20 giây trên Enemy x3. (Tỷ lệ thành công: 60%.) <br> Gây thêm sát thương hiệu quả cho 256,5% ATK khi kích hoạt chuỗi tấn công. (Đảm bảo quan trọng)"
    },
    {
      name:"Jack",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng tỷ lệ kháng Crit của đồng minh lên 10%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 170,3% ATK cho Kẻ thù x1. <br> [Sát thương bổ sung:] Gây thêm sát thương tương đương với 147,7% ATK cho kẻ thù bóng tối.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 102% ATK cho Kẻ thù x3. <br> [Sát thương bổ sung]: Gây thêm sát thương bằng 41,9% DEF nếu áp dụng hiệu ứng Rào chắn.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Jasper",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của đồng minh thêm 25%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 212,8% ATK cho Kẻ thù x3. <br> [Hiệu ứng trạng thái]: Gây im lặng cho kẻ thù x3 trong 20 giây. (Tỷ lệ thành công: 30%.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 168,2% ATK cho Kẻ thù x4. <br> [Sát thương bổ sung]: Gây sát thương cố định 288 cho Kẻ thù x4.",
      inflictEffect:"Silence",
      inflictEffectDesc:"Gây im lặng cho kẻ thù x3 trong 20 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Jinkai",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Nếu có ít nhất 3x đồng minh Ánh sáng, hãy tăng 35% đồng minh ATK. <br> Tăng Crit DMG của đồng minh thêm 10%.",
      skill1:"[Buff]: Cast Barrier trên Ally x3 có khả năng gây sát thương lên tới 458 + 7,8% ATK. (Thời lượng: 30 giây.) <br> [Buff]: Áp dụng Taunt cho bản thân, biến chúng thành mục tiêu ưu tiên cho kẻ thù. (Thời lượng 25 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 138% ATK cho Enemy x4. <br> [Hiệu ứng trạng thái]: Gây im lặng cho kẻ thù x4 trong 20 giây. (Tỷ lệ thành công: 30%.)",
      inflictEffect:"Silence",
      inflictEffectDesc:"Gây im lặng cho kẻ thù x4 trong 20 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Leika",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của đồng minh thêm 25%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 213,4% ATK cho Kẻ thù x3. <br> [Debuff]: Giảm tỷ lệ Crit của kẻ thù x3 xuống 23,2%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 137,3% ATK cho Kẻ thù x3. <br> [Sát thương bổ sung]: Gây sát thương cố định là 332 cho kẻ địch bị ảnh hưởng bởi Bleed.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Bleed",
      chainEffectDesc:"Gây sát thương cố định là 332 cho kẻ địch bị ảnh hưởng bởi Bleed."
    },
    {
      name:"Ludmila",
      tier:"SSR",
      element:"Fire",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng 30% ATK của các đồng minh Lửa. <br> Tăng 10% HP tối đa cho các đồng minh Lửa.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 316,2% ATK cho Enemy x3. (Tấn công liên tục Kẻ thù x3.) <br> [Hiệu ứng trạng thái]: Inflict Burn gây sát thương tương đương 26,7% ATK cứ sau 10 giây trong 20 giây. (Tỷ lệ thành công: 30%.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 142,2% ATK cho Enemy x3. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 85,3% ATK cho kẻ địch bị ảnh hưởng bởi Burn.",
      inflictEffect:"Burn",
      inflictEffectDesc:"Inflict Burn gây sát thương tương đương 26,7% ATK cứ sau 10 giây trong 20 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Luna",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng 30% ATK của các đồng minh loại ma thuật",
      skill1:"[Sát thương thường xuyên] Gây sát thương tương đương 175,1% ATK cho kẻ thù x3. <br> [Debuff] Xóa 1 Buff khỏi Enemy x1.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 100% ATK cho kẻ thù x4. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 63,8% ATK cho kẻ địch bị ảnh hưởng bởi Chill.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Chill",
      chainEffectDesc:"Gây thêm sát thương tương đương 63,8% ATK cho kẻ địch bị ảnh hưởng bởi Chill."
    },
    {
      name:"Malpion",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng Crit DMG của đồng minh Dark lên 30%",
      skill1:"[Sát thương thường xuyên] Gây sát thương tương đương với 258,4% ATK cho kẻ thù x1. <br> [Buff] Tăng tỷ lệ tự phê bình lên 27,9%. (Thời lượng: 7 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tới 263,5% ATK cho Kẻ thù x1. <br> [Hiệu ứng trạng thái]: Gây mù cho kẻ thù x1. trong 20s (Tỷ lệ thành công: 50%)",
      inflictEffect:"Blind",
      inflictEffectDesc:"Gây mù cho kẻ thù x1. trong 20s (Tỷ lệ thành công: 50%)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Ophelia",
      tier:"SSR",
      element:"Wind",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Tăng tỷ lệ chặn của các đồng minh Gió lên 10%.",
      skill1:"[Buff]: Chuyển 50% sát thương của Ally x3 sang caster. Giảm 30% sát thương của caster. (Thời lượng 49 giây.) <br> [Buff]: Giảm 37,2% DMG Taken of Self. (Thời lượng: 60 giây.) <br> [Buff]: Tăng tỷ lệ xuyên thủng của Ally x2 với ATK cao nhất lên 19,1%. (Thời lượng: 40 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 252,6% ATK cho Kẻ thù x1. <br> [Hiệu ứng trạng thái]: Gây choáng cho kẻ thù x1 trong 18 giây. (Tỷ lệ thành công: 80%.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Reiz",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất 3x đồng minh Nước, hãy tăng 35% đồng minh ATK. <br> Tăng Crit DMG của đồng minh thêm 10%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 243,6% ATK cho Enemy x1. <br> [Hiệu ứng trạng thái]: Gây sát thương Chill gây sát thương tương đương 4.2% ATK mỗi 4s trong 36 giây.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 222,3% ATK cho Kẻ thù x1. (Đảm bảo quan trọng)",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill gây sát thương tương đương 4.2% ATK mỗi 4s trong 36 giây.",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Ren",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng chỉ số DMG của các đồng minh loại vật lý lên 20%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 254,3% ATK cho Kẻ thù x1. <br> [Hiệu ứng trạng thái]: Gây sát thương gây sát thương bằng 14% ATK mỗi 6 giây trong 30 giây.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 142,3% ATK cho Kẻ thù x3. <br> [Hiệu ứng trạng thái]: Chảy máu gây sát thương tương đương 7% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 30%)",
      inflictEffect:"Poison|Bleed",
      inflictEffectDesc:"Inflict Poison gây sát thương bằng 14% ATK mỗi 6s trong 30 giây. | Inflict Bleed gây sát thương tương đương 7% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 30%)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Shoumei",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Tăng ATK của đồng minh thêm 25%",
      skill1:"[Chữa bệnh]: Chữa lành Ally x5 cho 98,1% ATK. <br> [Buff]: Tăng DEF của Ally x5 thêm 23,9%. (Thời lượng: 60 giây.)",
      skill2:"[Buff]: Miễn dịch hiệu ứng trạng thái gây ra cho Ally x4 trong 15 giây. (Thời lượng: 15 giây.) <br> [Buff]: Giảm DMG Taken of Ally x4 xuống 16,6%. (Thời lượng: 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Sophia",
      tier:"SSR",
      element:"Light",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Tăng DEF của các đồng minh Ánh sáng lên 40%",
      skill1:"[Chữa bệnh]: Chữa lành Ally x3 cho 161,5% ATK.",
      skill2:"[Phục sinh]: Hồi sinh Ally x1 với 50% HP.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Teze",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất x3 đồng minh Loại tối, hãy tăng 35% đồng minh ATK. <br> Tăng tỷ lệ phê bình của đồng minh thêm 5%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 251,7% ATK cho Enemy x1. <br> [Sát thương bổ sung]: Gây thêm sát thương bằng 144,3% ATK nếu áp dụng hiệu ứng ATK +.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 278,2% ATK cho Enemy x1. (Đảm bảo quan trọng)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Unknown",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATk thêm 25% cho một mục tiêu",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 253,1% ATK cho Enemy x1. <br> [Hiệu ứng trạng thái]: Gây mù cho kẻ thù x1 trong 20 giây. (Tỷ lệ thành công: 80%.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 180,5% ATK cho Kẻ thù x3. <br> [Sát thương bổ sung]: Gây sát thương cố định 421 cho kẻ địch bị ảnh hưởng bởi Blind.",
      inflictEffect:"Blind",
      inflictEffectDesc:"Gây mù cho kẻ thù x1 trong 20 giây. (Tỷ lệ thành công: 80%.)",
      chainEffect:"Blind",
      chainEffectDesc:"Gây sát thương cố định 421 cho kẻ địch bị ảnh hưởng bởi Blind."
    },
    {
      name:"Yggdrasil",
      tier:"SSR",
      element:"Wind",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Tăng hiệu ứng trạng thái Chống lại tỷ lệ của các đồng minh thêm 10%.",
      skill1:"[Buff]: Hiệu ứng miễn nhiễm sát thương Appy trên Ally x3 1 lần. (Thời lượng: 32 giây.)",
      skill2:"[Chữa bệnh]: Chữa lành HP của Ally x5 với 29,8% ATK cứ sau 8 giây trong 40 giây. <br> [Buff]: Tăng DEF của Ally x5 thêm 29,1%. (Thời lượng: 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Rito",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng ATK của tất cả các đồng minh loại Nước lên 25%.  <br> Tăng DEF của tất cả các đồng minh loại Nước thêm 10%",
      skill1:"[Sát thương tiêu chuẩn]: Gây sát thương tương đương với 173,1% ATK cho 3 kẻ địch. <br> [Sát thương bổ sung]: Ngoài ra gây sát thương tương đương 46,2 $ ATK cho kẻ địch loại vật lý.",
      skill2:"[Sát thương tiêu chuẩn]: Gây sát thương tương đương 184,9% ATK cho 4 kẻ địch. <br> [Hiệu ứng trạng thái]: Gây sốc cho các mục tiêu được thực hiện bởi Chill. (Tỷ lệ thành công: 70%; Thời lượng: 18 giây; [Sốc]: Vô hiệu hóa các đòn tấn công thường xuyên và các kỹ năng hoạt động.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Chill",
      chainEffectDesc:"Gây sốc cho các mục tiêu được thực hiện bởi Chill. (Tỷ lệ thành công: 70%; Thời lượng: 18 giây; [Sốc]: Vô hiệu hóa các đòn tấn công thường xuyên và các kỹ năng hoạt động.)"
    },
    {
      name:"Iroha",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Nếu có từ 3 đồng minh loại Nước trở lên, hãy tăng ATK của tất cả các đồng minh thêm 15%. <br> Tăng tỷ lệ chặn của tất cả các đồng minh lên 5%",
      skill1:"[Buff]: Cast Barrier trên 4 đồng minh, chặn sát thương bằng 689 + 13,4% (Áp dụng cho 4 đồng minh có DEF cao nhất. <br> [Buff]: Tăng DEF của 4 đồng minh lên 26% (Tỷ lệ thành công: 100%; Thời lượng: 60 giây)",
      skill2:"[Sát thương tiêu chuẩn]: Gây sát thương tương đương 126,2% ATK cho 4 kẻ địch. <br> [Buff]: Giảm sát thương từ 4 kẻ địch 25,2%. (Tỷ lệ thành công: 100%; Thời lượng: 60 giây)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Alcon",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Assist",
      leaderSkill:"Tăng 10% HP tối đa cho các đồng minh lửa",
      skill1:"[Chữa bệnh]: Chữa lành Ally x3 cho 98,9% ATK <br> [Buff]: Tăng ATK của Ally x3 thêm 19,3%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 242,2% ATK cho Enemy x1. <br> [Debuff]: Giảm sát thương của kẻ thù x1 xuống 31,3%. (Thời lượng: 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Alter",
      tier:"SR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh nước lên 20%",
      skill1:"[Buff]: Tăng khả năng xuyên thủng DMG của bản thân lên 804. (Thời lượng: 7 giây.) <br> [Sát thương thường xuyên]: Gây sát thương tương đương với 247,6% ATK cho Kẻ thù x1.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 245,8% ATK cho Kẻ thù x1. <br> [Buff]: Tăng Crit DMG của bản thân thêm 50,9%. (Thời lượng: 7 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Amati",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng 20% ​​ATK của các đồng minh Gió",
      skill1:"[Hiệu ứng trạng thái]: Gây sát thương gây sát thương tương đương 12,9% ATK mỗi 6s trong 30 giây. (Tỷ lệ thành công: 50%.) <br> [Debuff]: Giảm DEF của kẻ thù x3 xuống 25,7%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 250,5% ATK cho Enemy x1. <br> [Hiệu ứng chuỗi]: Gây sát thương tương đương 250,5% ATK cho kẻ địch bị ảnh hưởng bởi Poison. <br> [Hiệu ứng chuỗi]: Giảm sát thương của kẻ thù x1 xuống 32,1% (Thời lượng: 60 giây).",
      inflictEffect:"Poison",
      inflictEffectDesc:"Infison Poison gây sát thương tương đương 12,9% ATK mỗi 6s trong 30 giây. (Tỷ lệ thành công: 50%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Gây sát thương tương đương 250,5% ATK cho kẻ địch bị ảnh hưởng bởi Poison. <br> Giảm sát thương của kẻ thù x1 xuống 32,1% (Thời lượng: 60 giây)."
    },
    {
      name:"Black Mary",
      tier:"SR",
      element:"Fire",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng tỷ lệ phê bình của các đồng minh lên 10%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 134,4% ATK cho Kẻ thù x4. <br> [Debuff]: Giảm tỷ lệ Crit của kẻ thù x4 xuống 18,6%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 245,9% ATK cho Kẻ thù x1. <br> [Buff]: Hút máu tự sát vào bản thân giúp hồi phục 33,6% sát thương. (Thời lượng: 5s. Chữa lành tới 50% ATK của bạn.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Brunhild",
      tier:"SR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh loại vật lý lên 20%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 245,5% ATK cho Kẻ thù x1. <br> [Sát thương bổ sung]: Gây sát thương cố định 354 cho Kẻ thù x1.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 139,8% ATK cho Kẻ thù x4. <br> [Hiệu ứng trạng thái]: Chảy máu gây sát thương tương đương 7,4% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 20%.)",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict Bleed gây sát thương tương đương 7,4% ATK mỗi 5s trong 30 giây. (Tỷ lệ thành công: 20%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Cicero",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Giảm 5% DMG Taken của đồng minh.",
      skill1:"[Buff]: Tăng DEF của Ally x5 thêm 26,9%. (Tỷ lệ thành công: 100%. Thời lượng: 60 giây.) <br> [Chữa bệnh]: Chữa lành Ally x2 với 118,9% ATK.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 259,6% ATK cho Enemy x1. (Ngoài ra, áp dụng đòn tấn công cuối cùng vào Enemy x3.) <br> [Buff]: DMG phản chiếu về bản thân phản ánh 20,9% sát thương. (Thời lượng: 30 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Darkhell",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng tỷ lệ chặn của các đồng minh gió lên 5%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 212,4% ATK cho Enemy x3. <br> [Hiệu ứng trạng thái]: Gây sát thương gây sát thương tương đương 12,5% ATK mỗi 6 giây trong 30 giây. (Tỷ lệ thành công: 30%.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 140,2% ATK cho Enemy x4.",
      inflictEffect:"Poison",
      inflictEffectDesc:"Infison Poison gây sát thương tương đương 12,5% ATK mỗi 6s trong 30 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Eleonore",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của đồng minh thêm 10%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 247,2% ATK cho Enemy x1.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 248,6% ATK cho Kẻ thù x1. <br> [Hiệu ứng chuỗi]: Gây sát thương tương đương với 248,6% ATK cho kẻ địch bị ảnh hưởng bởi Burn <br> [Hiệu ứng chuỗi]: Gây thêm sát thương tương đương 140,9% ATK nếu HP của chính họ là 50% hoặc thấp hơn.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Burn",
      chainEffectDesc:"Gây sát thương tương đương với 248,6% ATK cho kẻ địch bị ảnh hưởng bởi Burn"
    },
    {
      name:"Elizabeth",
      tier:"SR",
      element:"Dark",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng 10% HP tối đa của đồng minh Dark lên 10%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 144,1% ATK cho Enemy x3. <br> [Hiệu ứng trạng thái]: Gây mù cho kẻ thù x3 trong 20 giây. (Tỷ lệ thành công: 30%.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 252,1% ATK cho Enemy x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 140,8% ATK cho kẻ địch bị ảnh hưởng bởi Blind.",
      inflictEffect:"Blind",
      inflictEffectDesc:"Gây mù cho kẻ thù x3 trong 20 giây. (Tỷ lệ thành công: 30%.)",
      chainEffect:"Blind",
      chainEffectDesc:"Gây thêm sát thương tương đương 140,8% ATK cho kẻ địch bị ảnh hưởng bởi Blind."
    },
    {
      name:"Gigamachina",
      tier:"SR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng tỷ lệ Crit của các đồng minh lên 5%. <br> Tăng Crit DMG của các đồng minh thêm 5%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 167,3% ATK cho Enemy x4.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 136,3% ATK cho Kẻ thù x3. <br> [Buff]: Tăng xuyên giáp DMG của bản thân thêm 795. (Thời lượng: 7 giây).",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gleck_SR",
      tier:"SR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Giảm 5% DMG Taken of Light đồng minh.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 249,5% ATK cho Kẻ thù x1. <br> [Buff]: Tăng tỷ lệ Crit của bản thân lên 26,1%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 249% ATK cho Enemy x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương với 142,8% ATK nếu áp dụng Crit Rate +.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gomuske",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Tăng 5% HP tối đa của các đồng minh",
      skill1:"[Buff]: Áp dụng Taunt trên Enemy x1, biến chúng thành mục tiêu ưu tiên cho kẻ thù. (Thời lượng: 37 giây.) <br> [Buff]: Tăng DEF của bản thân lên 41,8%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 107,5% ATK cho Enemy x3. <br> [Buff]: Áp dụng hiệu ứng giảm DMG Taken 28,2% cho bản thân nếu DEF + được áp dụng. (Thời lượng: 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Harima",
      tier:"SR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất Water Ally x3, hãy tăng 15% ATK cho đồng minh",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 248,6% ATK cho Kẻ thù x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 149,1% ATK cho kẻ địch bị ảnh hưởng bởi Chill.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 138,9% ATK cho Kẻ thù x4. <br> [Hiệu ứng trạng thái]: Gây mù cho kẻ thù x4 trong 20 giây. (Tỷ lệ thành công: 60%.)",
      inflictEffect:"Blind",
      inflictEffectDesc:"Gây mù cho kẻ thù x4 trong 20 giây. (Tỷ lệ thành công: 60%.)",
      chainEffect:"Chill",
      chainEffectDesc:"Gây thêm sát thương tương đương 149,1% ATK cho kẻ địch bị ảnh hưởng bởi Chill."
    },
    {
      name:"Leon",
      tier:"SR",
      element:"Light",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Tăng tỷ lệ kháng Crit của đồng minh lên 5%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 232% ATK cho Enemy x1. <br> [Buff]: Tăng tỷ lệ truy cập của bản thân lên 15,7%. (Thời lượng: 40 giây.)",
      skill2:"[Buff]: Tăng hiệu ứng trạng thái Chống lại tỷ lệ của đồng minh x3 thêm 34,3%. (Tỷ lệ thành công: 100%, Thời lượng: 60 giây.) <br> [Buff]: Tăng DEF của Ally x3 thêm 34,3%. (Thời lượng 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Machaon",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của đồng minh thêm 10%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 248,6% ATK cho Enemy x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 140,9% ATK cho kẻ địch có HP thấp hơn 50%.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 248,6% ATK cho Enemy x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 140,9% ATK cho kẻ địch có HP thấp hơn 50%.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Mina",
      tier:"SR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất 3x đồng minh Gió, tăng 15% đồng minh ATK.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 251,9% ATK cho Kẻ thù x1. <br> [Hiệu ứng dây chuyền]: Gây sát thương tương đương với 251,9% ATK cho kẻ địch bị ảnh hưởng bởi Poison. <br> [Hiệu ứng chuỗi] : Gây thêm sát thương bằng 5,7% Max HP khi kích hoạt chuỗi tấn công.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 212,1% ATK cho Enemy x2. (Tấn công liên tục Kẻ thù x2.) <br> [Hiệu ứng trạng thái]: Gây im lặng cho kẻ thù x2 trong 20 giây. (Tỷ lệ thành công: 30%.)",
      inflictEffect:"Silence",
      inflictEffectDesc:"Gây im lặng cho kẻ thù x2 trong 20 giây (Tỷ lệ thành công: 30%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Gây sát thương tương đương với 251,9% ATK cho kẻ địch bị ảnh hưởng bởi Poison. <br> [Hiệu ứng chuỗi]: Gây thêm sát thương bằng 5,7% lượng HP tối đa khi kích hoạt chuỗi tấn công."
    },
    {
      name:"Nekoroid",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Tăng hiệu ứng trạng thái Chống lại tỷ lệ của các đồng minh thêm 5%.",
      skill1:"[Chữa bệnh]: Chữa lành Ally x3 cho 101,7% ATK. <br> [Buff]: Cast Barrier trên Ally x3 có khả năng gây sát thương lên tới 495 + 7,2%.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 208% ATK cho Enemy x2. <br> [Debuff]: Xóa 1 Buff khỏi Enemy x2.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Niflheim",
      tier:"SR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng 20% ​​DEF của các đồng minh nước",
      skill1:"[Sát thương thường xuyên]: Gây sát thương bằng 250,5% ATK cho Enemy x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương với 124,9% ATK cho kẻ địch bị ảnh hưởng bởi Chill.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương với 208,2% ATk cho Enemy x1. <br> [Hiệu ứng trạng thái]: Gây sát thương Chill gây sát thương tương đương 3,9% ATK mỗi 4s trong 36 giây. (Tỷ lệ thành công: 50%.)",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill gây sát thương tương đương 3,9% ATK mỗi 4s trong 36 giây. (Tỷ lệ thành công: 50%.)",
      chainEffect:"Chill",
      chainEffectDesc:"Gây thêm sát thương tương đương với 124,9% ATK cho kẻ địch bị ảnh hưởng bởi Chill."
    },
    {
      name:"Picaso",
      tier:"SR",
      element:"Water",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Tăng HP tối đa của đồng minh thêm 5%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 241,1% ATK cho Enemy x1. <br> [Debuff]: Giảm 15,7% tỷ lệ chặn của kẻ thù x1. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 139,6% ATK cho kẻ thù x4. <br> [Buff]: DMG phản xạ về bản thân phản ánh 20,9% sát thương. (Thời lượng: 30 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Proxy",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất 3x đồng minh tối, tăng 15% đồng minh ATK.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 143,3% ATK cho Kẻ thù x4. <br> [Debuff]: Giảm khả năng hồi máu của kẻ thù x4 34,4%. (Thời lượng: 60 giây.)",
      skill2:"[Sát thương thường xuyên:] Gây sát thương tương đương 146,7% ATK cho Enemy x3. <br> [Chữa bệnh]: Chữa lành Ally x2 cho 122,6% ATK.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Redmachina",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Nếu có ít nhất 3x đồng minh Lửa, tăng 15% đồng minh ATK.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 124,7% ATK cho Enemy x5.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 140,3% ATK cho Kẻ thù x3. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 19,3% ATK cho kẻ địch Gió.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Shinobi",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng tỷ lệ Crit của các đồng minh tối lên 5%. <br> Tăng Crit DMG của các đồng minh tối lên 5%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương với 249,8% ATK cho Kẻ thù x1. <br> [Hiệu ứng trạng thái]: Gây sát thương gây sát thương bằng 15,7% ATK mỗi 6 giây trong 30 giây. (Tỷ lệ thành công: 90%.)",
      skill2:"[Sát thương thông thường]: Gây sát thương bằng 245,5% ATK cho Kẻ thù x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương với 147,3% ATK cho kẻ địch bị ảnh hưởng bởi Poison.",
      inflictEffect:"Poison",
      inflictEffectDesc:"Infison Poison gây sát thương tương đương 15,7% ATK mỗi 6s trong 30 giây. (Tỷ lệ thành công: 90%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Gây thêm sát thương tương đương với 147,3% ATK cho kẻ địch bị ảnh hưởng bởi Poison."
    },
    {
      name:"Surt",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Tăng ATK của các đồng minh Lửa lên 20%",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 206,2% ATK cho Kẻ thù x1. <br> [Sát thương bổ sung]: Gây thêm sát thương tương đương 120,6% ATk cho kẻ địch bị ảnh hưởng bởi Burn.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương tương đương 140,8% ATK cho Enemy x4.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Burn",
      chainEffectDesc:"Gây thêm sát thương tương đương 120,6% ATk cho kẻ địch bị ảnh hưởng bởi Burn."
    },
    {
      name:"Teramachina",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng 10% HP tối đa cho các đồng minh Light.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 122,4% ATK cho Enemy x5.",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 103,7% ATK cho Kẻ thù x2. <br> [Sát thương bổ sung]: Gây thêm sát thương bằng 3,8% HP hiện tại cho Kẻ thù x2. (Sát thương tối đa: 150% ATK.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Victoria",
      tier:"SR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Tăng ATK của đồng minh thêm 10%.",
      skill1:"[Sát thương thường xuyên]: Gây sát thương tương đương 139,2% ATK cho kẻ thù 4%. <br> [Hiệu ứng trạng thái]: Gây sát thương gây sát thương tương đương 11,5% ATK mỗi 6 giây trong 30 giây. (Tỷ lệ thành công: 30%)",
      skill2:"[Sát thương thường xuyên]: Gây sát thương bằng 140,4% ATK cho Enemy x3. <br> [Debuff]: Giảm ATK của Enemy x3 xuống 22,3%. (Thời lượng: 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Yuri",
      tier:"SR",
      element:"Light",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Tăng tỷ lệ Crit của các đồng minh Ánh sáng lên 5%. <br> Tăng Crit DMG của các đồng minh Ánh sáng thêm 5%.",
      skill1:"[Buff]: Cast Barrier trên Ally x3 có khả năng gây sát thương lên tới 561 + 9% ATK. (100% cơ hội để áp dụng hiệu ứng trên Ally x3 với mức cao nhất (?), Không bao gồm bản thân. Thời lượng: 30 giây.)",
      skill2:"[Buff]: Giảm thời gian hồi chiêu của Ally x3 xuống 13 giây. <br> [Buff]: Tăng ATK của Ally x3 thêm 29,3%. (Thời lượng: 60 giây.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },

    ];


    this.HERO_DATA=[
    {
      name:"Anemone",
      tier:"UR",
      element:"DarkFire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"For each type of Hero in your Team, the ATK of your heroes is boosted by 20%.",
      skill1:"[Regular Damage]: Deal damage equal to 211% of ATK to Enemy x3. <br>[Status Effect]: Inflict Blind on Enemy x3 for 20s. (Success Rate: 50%)",
      skill2:"[Regular Damage]: Deal damage equal to 158,2% of ATK to Enemy x5.<br>[Chain Effect]: Deal damage equal to 174,1% of ATK to enemies affected by Blind",
      inflictEffect:"Blind",
      inflictEffectDesc:"Inflict Blind on Enemy x3 for 20s. (Success Rate: 50%)",
      chainEffect:"Blind",
      chainEffectDesc:"Deal damage equal to 174,1% of ATK to enemies affected by Blind"
    },
    {
      name:"Riah",
      tier:"UR",
      element:"LightWind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"For each type of Hero on your Team, increase allies ATK by 15%.",
      skill1:"[Regular Damage]: Deal damage equal to 336,7% of ATK to Enemy x1. <br>[Status Effect]: Inflict Bleed that deals damage equal to 11.5% of ATK every 5s for 30s. (Success Rate: 100%)<br>(Bleed): Decrease Healing by 20%.",
      skill2:"[Regular Damage]: Deal Damage equal to 352,3% of ATK to Enemy x1. (Guaranteed critical.)<br>[Additional Damage]: Deal additional damage equal to 211,4% of ATK to enemies affected by Bleed.",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict Bleed that deals damage equal to 11.5% of ATK every 5s for 30s. (Success Rate: 100%)",
      chainEffect:"Bleed",
      chainEffectDesc:"Deal additional damage equal to 211,4% of ATK to enemies affected by Bleed."
    },
    {
      name:"Aglaea",
      tier:"SSR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of Physical-Type Allies by 20%.<br>Increase Crit DMG of Physical-Type Allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 315,9% of ATK to Enemy x3. (Sequentially attack Enemy x3.)<br>[Status Effect]: Inflict Chill that deals damage equal to 4,3% of ATK every 4s for 36s. (Success Rate: 30%.)",
      skill2:"[Regular Damage]: Deal damage equal to 305,5% of ATK to Enemy x1. (Guaranteed critical.)<br>[Additional Damage]: Deal fixed damage of 790 to enemies affected by Chill.",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill that deals damage equal to 4,3% of ATK every 4s for 36s. (Success Rate: 30%.)",
      chainEffect:"Chill",
      chainEffectDesc:"Deal fixed damage of 790 to enemies affected by Chill."
    },
    {
      name:"Alex",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Increase ATK of Light allies by 40%.",
      skill1:"[Buff]: Increase DEF of Ally x5 by 25,2%. (Success Rate: 100%, Duration: 60s.)<br>[Buff]: Cast Barrier on Self that blocks up to 667 + 9,6% of ATK worth of damage. (Success Rate: 100%. Duration: 30s.)",
      skill2:"[Regular Damage]: Deal damage equal to 176,5% of ATK to Enemy x3. <br>[Additional Damage]: Deal additional damage equal to 72,5% of DEF to Enemy x3.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Angelo",
      tier:"SSR",
      element:"Dark",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Dark allies by 40%",
      skill1:"[Regular Damage]: Deal damage equal to 166,7% of ATK to Enemy x4.",
      skill2:"[Regular Damage]: Deal damage equal to 184,8% of ATK to Enemy x4.<br>[Additional Damage]: Deal additional damage equal to 3,9% of Max HP to Enemy x4. (Max Damage: 150% of ATK.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Aria",
      tier:"SSR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase Max HP of Water Allies by 20%",
      skill1:"[Regular Damage:] Deal damage equal to 251,7% of ATK to Enemy x1.<br>[Debuff]: Decrease Damage of Enemy x1 by 27,9%. (Success Rate: 50%, Duration 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 248,4% of ATK to Enemy x1.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Ash",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of allies by 25%",
      skill1:"[Regular Damage]: Deal damage equal to 245,5% of ATK to Enemy x1. <br>[Status Effect]: Inflict Burn that deals damage equal to 26,1% of ATK every 10s for 20s. (Success Rate: 30%.)<br>[Chain Effect]: Deal damage equal to 245,5% of ATK to enemies affected by Poison. (Guaranteed critical.)",
      skill2:"[Regular Damage]: Deal damage equal to 211,8% of ATK to Enemy x3.<br>[Debuff]: Decrease ATK of Enemy x3 by 28,6%. (Duration: 60s.)",
      inflictEffect:"Burn",
      inflictEffectDesc:"Inflict Burn that deals damage equal to 26,1% of ATK every 10s for 20s. (Success Rate: 30%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Deal damage equal to 245,5% of ATK to enemies affected by Poison. (Guaranteed critical.)"
    },
    {
      name:"Beatrice",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"If there are at least Ally x3 of Wind allies, increase allies ATK by 35%. <br>Increase Crit DMG of allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 252,6% of ATK to Enemy x1.<br>[Status Effect]: Inflict bleed that deals damage equal to 9,3% of ATK every 5s for 30s. (Success Rate: 80%.)",
      skill2:"[Regular Damage]: Deal Damage equal to 158,7% of ATK to Enemy x3. (Guaranteed critical.)",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict bleed that deals damage equal to 9,3% of ATK every 5s for 30s. (Success Rate: 80%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Blossom",
      tier:"SSR",
      element:"Fire",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Fire allies by 40%",
      skill1:"[Regular Damage]: Deal damage equal to 118,2% of ATK to Enemy x3.",
      skill2:"[Regular Damage]: Deal damage equal to 178,6% of ATK to Enemy x3.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Celesta",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of Wind allies by 40%",
      skill1:"[Regular Damage]: Deal damage equal to 259,2% of ATK to Enemy x1. <br>[Debuff]: Decrease DEF of Enemy x1 by 27,9%. (Duration 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 120% of ATK to Enemy x4.<br>[Status Effect]: Inflict Bleed that deals damage equal to 7,3% of ATK every 5s for 30s. (Success Rate: 40%.) ",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict Bleed that deals damage equal to 7,3% of ATK every 5s for 30s. (Success Rate: 40%.) ",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Colette",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Water Allies by 40%",
      skill1:"[Regular Damage]: Deal damage equal to 167,4% of ATK to Enemy x3.<br>[Debuff]: Decrease Status Effect Resist Rate of Enemy x3 by 22,9%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 99,4% of ATK to Enemy x5. <br>[Status Effect]: Inflict Chill that deals damage equal to 2,7% of ATK every 4s for 36s. (Success Rate: 30%.)",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill that deals damage equal to 2,7% of ATK every 4s for 36s. (Success Rate: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Demian",
      tier:"SSR",
      element:"Dark",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Increase ATK of allies by 25%.",
      skill1:"[Regular Damage]: Deal damage equal to 215,5% of ATK to Enemy x3.<br>[Healing]: Heal Self for 170,1% of ATK.<br>[Additional Healing]: Additionally heal Ally x1 for 27,2% of Max HP. (Apply effect on Ally x1 with the lowest HP, excluding self.)",
      skill2:"[Regular Damage]: Deal damage equal to 176,2% of ATK to Enemy x4.<br>[Status Effect]: Inflict Blind on Enemy x4 for 20s. (Success Rate: 20%.)",
      inflictEffect:"Blind",
      inflictEffectDesc:"Inflict Blind on Enemy x4 for 20s. (Success Rate: 20%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Edmund",
      tier:"SSR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Magic-Type Allies by 20%.<br>Increase Block Rate of Magic-Type Allies by 5%",
      skill1:"[Regular Damage]: Deal damage equal to 177,4% of ATK to Enemy x3.<br>[Debuff]: Decrease Block Rate of Enemy x3 by 11,8%. (Success Rate: 50%, Duration: 40s.)",
      skill2:"[Regular Damage]: Deal damage equal to 103,1% of ATK to Enemy x5. <br>[Status Effect]: Infict Poison that deals damage equal to 9,2% of ATK every 6s for 30s. (Success Rate: 20%.<br>(Poison): Decrease Status Effect Resist Rate by 20%",
      inflictEffect:"Poison",
      inflictEffectDesc:"Infict Poison that deals damage equal to 9,2% of ATK every 6s for 30s. (Success Rate: 20%.",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Elphie",
      tier:"SSR",
      element:"Fire",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Increase Crit DMG of Fire allies by 30%",
      skill1:"[Healing]: Heal Ally x4 for 107,9% of ATK. (Apply effect on Ally x4 with the lowest HP.)<br>[Buff]: Increase ATK of Ally x4 by 29,7% (Apply effect on Ally x4 with the lowest HP.)",
      skill2:"[Buff]: Increase Crit Rate of Ally x4 by 21%. (On Allies with the highest ATK, excluding Self. Duration: 60s.)<br>[Buff]: Remove 1 Debuff from Ally x1. (Apply effect on Ally x1 with the highest ATK, excluding self.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Emodin",
      tier:"SSR",
      element:"Water",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Increase DEF of allies by 20%",
      skill1:"[Regular Damage]: Deal damage equal to 245,9% of ATK to Enemy x1. <br>[Debuff]: Decrease ATK of Enemy x1 by 23,5%. (Success Rate: 100%. Duration: 60s.)",
      skill2:"[Buff]: Increase ATK of Ally x5 by 20,9%. (Success Rate: 100%. Duration: 60s.)<br>[Buff]: Cast Barrier on Self that blocks up to 668 + 9,3% of ATK worth of damage. (Success Rate: 100%, Duration: 30s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Esta",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of Physical-Type allies by 30%",
      skill1:"[Regular Damage]: Deal damage equal to 169,8% of ATK to Enemy x3.",
      skill2:"[Regular Damage]: Deal damage equal to 177,2% of ATK to Enemy x3.<br>[Additional Damage]: Deal fixed damage of 414 to Enemy x1.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gleck",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Decrease DMG Taken of allies by 10%",
      skill1:"[Regular Damage]: Deal damage equal to 245% of ATK to Enemy x1. <br>[Debuff]: Decrease Pierce Rate of Enemy x1 by 27,9%. (Duration: 7s.)",
      skill2:"[Regular Damage]: Deal damage equal to 175,1% of ATK to Enemy x3.<br>[Status Effect]: Inflict Stun on Enemy x3 for 18s. (Success Rate: 30%.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gordon",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Increase Max HP of allies by 15%",
      skill1:"[Regular Damage]: Deal damage equal to 167,9% of ATK to Enemy x3.<br>[Debuff]: Decrease Damage of Enemy x3 by 22,9%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 251,2% of ATK to Enemy x1.<br>[Status Effect]: Inflict Burn that deals damage equal to 26,1% of ATK every 10s for 20s. (Success Rate: 80%.)",
      inflictEffect:"Burn",
      inflictEffectDesc:"Inflict Burn that deals damage equal to 26,1% of ATK every 10s for 20s. (Success Rate: 80%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Helena",
      tier:"SSR",
      element:"Light",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Increase ATK by 30% for 3 or more targets.",
      skill1:"[Healing]: Heal Ally x5 for 98,5% of ATK.<br>[Additional Healing]: Additionally Heal Ally x1 for 34,1% of ATK. (Apply effect on Ally x1 with the lowest HP.)",
      skill2:"[Resurrection]: Resurrect Ally x1 with 30% of HP.<br>[Buff]: Cast barrier on Ally x4 that blocks up to 550 + 8,1% of ATK worth of damage. (Duration: 30s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Hien",
      tier:"SSR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"If there are at least 3x Fire allies, increase allies ATK by 35%. <br>Increase Crit Rate of allies by 5%.",
      skill1:"[Regular Damage]: Deal damage equal to 256,5% of ATK to Enemy x1.<br>[Chain Effect]: Deal additional damage eqial to 256.5% of ATK when chain attack is triggered. (Guaranteed critical)<br>[Chain Effect]: If the struck enemy is affected by Burn, inflict Burn to deal damage equal to 22% of ATK every 10s for 20s on Enemy x3. (Success Rate:60%.)",
      skill2:"[Regular Damage]: Deal damage equal to 177,9% of ATK to Enemy x3.<br>[Debuff]: Decrease Damage of Enemy x3 by 23,5%. (Success Rate: 30%, Duration: 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Burn",
      chainEffectDesc:"If the struck enemy is affected by Burn, inflict Burn to deal damage equal to 22% of ATK every 10s for 20s on Enemy x3. (Success Rate:60%.)<br>Deal additional damage eqial to 256.5% of ATK when chain attack is triggered. (Guaranteed critical)"
    },
    {
      name:"Jack",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase Crit Resist Rate of allies by 10%",
      skill1:"[Regular Damage]: Deal damage equal to 170,3% of ATK to Enemy x1.<br>[Additional Damage:] Deal additional damage equal to 147,7% of ATK to Dark enemies.",
      skill2:"[Regular Damage]: Deal damage equal to 102% of ATK to Enemy x3.<br>[Additional Damage]: Deal additional damage equal to 41,9% of DEF if Barrier effect is applied.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Jasper",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of allies by 25%",
      skill1:"[Regular Damage]: Deal damage equal to 212,8% of ATK to Enemy x3.<br>[Status Effect]: Inflict Silence on Enemy x3 for 20s. (Success Rate: 30%.)",
      skill2:"[Regular Damage]: Deal damage equal to 168,2% of ATK to Enemy x4.<br>[Additional Damage]: Deal fixed damage of 288 to Enemy x4.",
      inflictEffect:"Silence",
      inflictEffectDesc:"Inflict Silence on Enemy x3 for 20s. (Success Rate: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Jinkai",
      tier:"SSR",
      element:"Light",
      type:"Physical",
      class:"Tank",
      leaderSkill:"If there are at least 3x Light allies, increase allies ATK by 35%.<br>Increase Crit DMG of allies by 10%.",
      skill1:"[Buff]: Cast Barrier on Ally x3 that blocks up to 458 + 7,8% of ATK worth of damage. (Duration: 30s.)<br>[Buff]: Apply Taunt on Self, making them priority targets for enemies. (Duration 25s.)",
      skill2:"[Regular Damage]: Deal damage equal to 138% of ATK to Enemy x4. <br>[Status Effect]: Inflict Silence on Enemy x4 for 20s. (Success Rate: 30%.)",
      inflictEffect:"Silence",
      inflictEffectDesc:"Inflict Silence on Enemy x4 for 20s. (Success Rate: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Leika",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of allies by 25%",
      skill1:"[Regular Damage]: Deal damage equal to 213,4% of ATK to Enemy x3.<br>[Debuff]: Decrease Crit Rate of Enemy x3 by 23,2%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 137,3% of ATK to Enemy x3.<br>[Additional Damage]: Deal fixed damage of 332 to enemies affected by Bleed.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Bleed",
      chainEffectDesc:"Deal fixed damage of 332 to enemies affected by Bleed."
    },
    {
      name:"Ludmila",
      tier:"SSR",
      element:"Fire",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Fire allies by 30%.<br>Increase Max HP of Fire allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 316,2% of ATK to Enemy x3. (Sequentially attack Enemy x3.)<br>[Status Effect]: Inflict Burn that deals damage equal to 26,7% of ATK every 10s for 20s. (Success Rate: 30%.)",
      skill2:"[Regular Damage]: Deal damage equal to 142,2% of ATK to Enemy x3. <br>[Additional Damage]: Deal additional damage equal to 85,3% of ATK to enemies affected by Burn.",
      inflictEffect:"Burn",
      inflictEffectDesc:"Inflict Burn that deals damage equal to 26,7% of ATK every 10s for 20s. (Success Rate: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Luna",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Magic-Type Allies by 30%",
      skill1:"[Regular Damage] Deal Damage equal to 175,1% of ATK to Enemy x3.<br>[Debuff] Remove 1 Buff from Enemy x1.",
      skill2:"[Regular Damage]: Deal Damage equal to 100% of ATK to Enemy x4.<br>[Additional Damage]: Deal additional Damage equal to 63,8% of ATK to enemies affected by Chill.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Chill",
      chainEffectDesc:"Deal additional Damage equal to 63,8% of ATK to enemies affected by Chill."
    },
    {
      name:"Malpion",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase Crit DMG of Dark allies by 30%",
      skill1:"[Regular Damage] Deal Damage equal to 258,4% of ATK to Enemy x1.<br>[Buff] Increase Crit Rate of Self by 27,9%. (Duration: 7s.)",
      skill2:"[Regular Damage]: Deal damage to 263,5% of ATK to Enemy x1.<br>[Status Effect]: Inflict Blind on Enemy x1. for 20s. (Success Rate: 50%)",
      inflictEffect:"Blind",
      inflictEffectDesc:"Inflict Blind on Enemy x1. for 20s. (Success Rate: 50%)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Ophelia",
      tier:"SSR",
      element:"Wind",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Increase Block rate of Wind allies by 10%.",
      skill1:"[Buff]: Transfer 50% of damage taken by Ally x3 to the caster. Decrease damage taken by the caster by 30%. (Duration 49s.)<br>[Buff]: Decrease DMG Taken of Self by 37,2%. (Duration: 60s.)<br>[Buff]: Increase Pierce Rate of Ally x2 with the highest ATK by 19,1%. (Duration: 40s.)",
      skill2:"[Regular Damage]: Deal damage equal to 252,6% of ATK to Enemy x1.<br>[Status Effect]: Inflict Stun on Enemy x1 for 18s. (Success Rate: 80%.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Reiz",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"If there are at least 3x Water allies, increase allies ATK by 35%.<br>Increase Crit DMG of allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 243,6% of ATK to Enemy x1. <br>[Status Effect]: Inflict Chill that deals damage equal to 4,2% of ATK every 4s for 36s.",
      skill2:"[Regular Damage]: Deal damage equal to 222,3% of ATK to Enemy x1. (Guaranteed critical)",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill that deals damage equal to 4,2% of ATK every 4s for 36s.",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Ren",
      tier:"SSR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase Crit DMG of Physical-Type allies by 20%",
      skill1:"[Regular Damage]: Deal damage equal to 254,3% of ATK to Enemy x1.<br>[Status Effect]: Inflict Poison that deals damage equal to 14% of ATK every 6s for 30s.",
      skill2:"[Regular Damage]: Deal damage equal to 142,3% of ATK to Enemy x3.<br>[Status Effect]: Inflict Bleed that deals damage equal to 7% of ATK every 5s for 30s. (Success Rate: 30%)",
      inflictEffect:"Poison|Bleed",
      inflictEffectDesc:"Inflict Poison that deals damage equal to 14% of ATK every 6s for 30s.|Inflict Bleed that deals damage equal to 7% of ATK every 5s for 30s. (Success Rate: 30%)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Shoumei",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Increase ATK of allies by 25%",
      skill1:"[Healing]: Heal Ally x5 for 98,1% of ATK.<br>[Buff]: Increase DEF of Ally x5 by 23,9%. (Duration: 60s.)",
      skill2:"[Buff]: Inflict Status Effect Immunity on Ally x4 for 15s. (Duration: 15s.)<br>[Buff]: Decrease DMG Taken of Ally x4 by 16,6%. (Duration: 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Sophia",
      tier:"SSR",
      element:"Light",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Increase DEF of Light allies by 40%",
      skill1:"[Healing]: Heal Ally x3 for 161,5% of ATK.",
      skill2:"[Resurrection]: Resurrect Ally x1 with 50% of HP.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Teze",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"If there are at least x3 Dark Type allies, increase allies ATK by 35%.<br>Increase Crit Rate of allies by 5%.",
      skill1:"[Regular Damage]: Deal damage equal to 251,7% of ATK to Enemy x1. <br>[Additional Damage]: Deal additional damage equal to 144,3% of ATK if ATK + effect is applied.",
      skill2:"[Regular Damage]: Deal damage equal to 278,2% of ATK to Enemy x1. (Guaranteed critical)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Unknown",
      tier:"SSR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATk by 25% for a single target",
      skill1:"[Regular Damage]: Deal damage equal to 253,1% of ATK to Enemy x1. <br>[Status Effect]: Inflict Blind on Enemy x1 for 20s. (Success Rate: 80%.)",
      skill2:"[Regular Damage]: Deal damage equal to 180,5% of ATK on Enemy x3.<br>[Additional Damage]: Deal fixed damage of 421 to enemies affected by Blind.",
      inflictEffect:"Blind",
      inflictEffectDesc:"Inflict Blind on Enemy x1 for 20s. (Success Rate: 80%.)",
      chainEffect:"Blind",
      chainEffectDesc:"Deal fixed damage of 421 to enemies affected by Blind."
    },
        {
      name:"Yggdrasil",
      tier:"SSR",
      element:"Wind",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Increase Status Effect Resist Rate of allies by 10%.",
      skill1:"[Buff]: Appy Damage Immunity effect on Ally x3 1 time(s). (Duration: 32s.)",
      skill2:"[Healing]: Heal HP of Ally x5 for 29,8% of ATK every 8s for 40s.<br>[Buff]: Increase DEF of Ally x5 by 29,1%. (Duration: 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Rito",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of all Water type allies by 25%. <br> Increase DEF of all Water type allies by 10%",
      skill1:"[Standard damage]: Deal damage equal to 173.1% of ATK to 3 enemies. <br> [Additional damage]:Additionally deal damage equal to 46.2$ of ATK to physical-type enemies.",
      skill2:"[Standard damage]: Deal damage equal to 184.9% of ATK to 4 enemies. <br>[Status effect]: Inflict Shock on targets effected by Chill. (Success Rate: 70%; Duration: 18 seconds; [Shock]: Disable regular attacks and active skills.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Chill",
      chainEffectDesc:"Inflict Shock on targets effected by Chill. (Success Rate: 70%; Duration: 18 seconds; [Shock]: Disable regular attacks and active skills.)"
    },
    {
      name:"Iroha",
      tier:"SSR",
      element:"Water",
      type:"Magic",
      class:"Assist",
      leaderSkill:"If there are 3 or more Water type allies, increase ATK of all allies by 15%. <br> Increase Block Rate of all allies by 5%",
      skill1:"[Buff]: Cast Barrier on 4 allies, blocking damage equal to 689 + 13.4% of (Applies to the 4 allies with highest DEF. <br> [Buff]: Raise DEF of 4 allies by 26% (Success Rate: 100%; Duration: 60 seconds)",
      skill2:"[Standard damage]: Deal damage equal to 126.2% of ATK to 4 enemies. <br> [Buff]: Reduce damage from 4 enemies by 25.2%. (Success Rate: 100%; Duration: 60 seconds)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Alcon",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Assist",
      leaderSkill:"Increase Max HP of Fire Allies by 10%",
      skill1:"[Healing]: Heal Ally x3 for 98,9% of ATK<br>[Buff]: Increase ATK of Ally x3 by 19,3%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 242,2% of ATK to Enemy x1. <br>[Debuff]: Decrease Damage of Enemy x1 by 31,3%. (Duration: 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Alter",
      tier:"SR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of Water allies by 20%",
      skill1:"[Buff]: Increase Pierce DMG of Self by 804. (Duration: 7s.)<br>[Regular Damage]: Deal damage equal to 247,6% of ATK to Enemy x1.",
      skill2:"[Regular Damage]: Deal damage equal to 245,8% of ATK to Enemy x1.<br>[Buff]: Increase Crit DMG of Self by 50,9%. (Duration: 7s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Amati",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Wind allies by 20%",
      skill1:"[Status Effect]: Inflict Poison that deals damage equal to 12,9% of ATK every 6s for 30s. (Success Rate: 50%.)<br>[Debuff]: Decrease DEF of Enemy x3 by 25,7%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 250,5% of ATK to Enemy x1. <br>[Chain Effect]: Deal damage equal to 250,5% of ATK to enemies affected by Poison.<br>[Chain Effect]: Decrease Damage of Enemy x1 by 32.1% (Duration: 60s.)",
      inflictEffect:"Poison",
      inflictEffectDesc:"Inflict Poison that deals damage equal to 12,9% of ATK every 6s for 30s. (Success Rate: 50%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Deal damage equal to 250,5% of ATK to enemies affected by Poison.<br>Decrease Damage of Enemy x1 by 32.1% (Duration: 60s.)"
    },
    {
      name:"Black Mary",
      tier:"SR",
      element:"Fire",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase Crit Rate of allies by 10%",
      skill1:"[Regular Damage]: Deal damage equal to 134,4% of ATK to Enemy x4.<br>[Debuff]: Decrease Crit Rate of Enemy x4 by 18,6%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 245,9% of ATK to Enemy x1.<br>[Buff]: Cast Blood Sucking on Self that heals 33,6% of damage. (Duration: 5s. Heals up to 50% of your ATK.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Brunhild",
      tier:"SR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of Physical-Type allies by 20%",
      skill1:"[Regular Damage]: Deal damage equal to 245,5% of ATK to Enemy x1.<br>[Additional Damage]: Deal fixed damage of 354 to Enemy x1.",
      skill2:"[Regular Damage]: Deal damage equal to 139,8% of ATK to Enemy x4.<br>[Status Effect]: Inflict Bleed that deals damage equal to 7,4% of ATK every 5s for 30s. (Success Rate: 20%.)",
      inflictEffect:"Bleed",
      inflictEffectDesc:"Inflict Bleed that deals damage equal to 7,4% of ATK every 5s for 30s. (Success Rate: 20%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Cicero",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Decrease DMG Taken of allies by 5%.",
      skill1:"[Buff]: Increase DEF of Ally x5 by 26,9%. (Success Rate: 100%. Duration: 60s.)<br>[Healing]: Heal Ally x2 for 118,9% of ATK.",
      skill2:"[Regular Damage]: Deal damage equal to 259,6% of ATK to Enemy x1. (Additionally apply the final attack on Enemy x3.)<br>[Buff]: Cast Reflected DMG on Self that reflects 20,9% of damage. (Duration: 30s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Darkhell",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase Block Rate of Wind allies by 5%.",
      skill1:"[Regular Damage]: Deal damage equal to 212,4% of ATK to Enemy x3. <br>[Status Effect]: Inflict Poison that deals damage equal to 12,5% of ATK every 6s for 30s. (Success Rate: 30%.)",
      skill2:"[Regular Damage]: Deal damage equal to 140,2% of ATK to Enemy x4.",
      inflictEffect:"Poison",
      inflictEffectDesc:"Inflict Poison that deals damage equal to 12,5% of ATK every 6s for 30s. (Success Rate: 30%.)",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Eleonore",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of allies by 10%",
      skill1:"[Regular Damage]: Deal damage equal to 247,2% of ATK to Enemy x1.",
      skill2:"[Regular Damage]: Deal damage equal to 248,6% of ATK to Enemy x1.<br>[Chain Effect]: Deal damage equal to 248,6% of ATK to enemies affected by Burn<br>[Chain Effect]: Deal additional damage equal to 140,9% of ATK if own HP is 50% or lower.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Burn",
      chainEffectDesc:"Deal damage equal to 248,6% of ATK to enemies affected by Burn"
    },
    {
      name:"Elizabeth",
      tier:"SR",
      element:"Dark",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase Max HP of Dark allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 144,1% of ATK to Enemy x3. <br>[Status Effect]: Inflict Blind on Enemy x3 for 20s. (Success Rate: 30%.)",
      skill2:"[Regular Damage]: Deal damage equal to 252,1% of ATK to Enemy x1. <br>[Additional Damage]: Deal additional damage equal to 140,8% of ATK to enemies affected by Blind.",
      inflictEffect:"Blind",
      inflictEffectDesc:"Inflict Blind on Enemy x3 for 20s. (Success Rate: 30%.)",
      chainEffect:"Blind",
      chainEffectDesc:"Deal additional damage equal to 140,8% of ATK to enemies affected by Blind."
    },
    {
      name:"Gigamachina",
      tier:"SR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase Crit Rate of allies by 5%.<br>Increase Crit DMG of allies by 5%.",
      skill1:"[Regular Damage]: Deal damage equal to 167,3% of ATK to Enemy x4.",
      skill2:"[Regular Damage]: Deal damage equal to 136,3% of ATK to Enemy x3.<br>[Buff]: Increase Pierce DMG of Self by 795. (Duration: 7s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gleck_SR",
      tier:"SR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Decrease DMG Taken of Light allies by 5%.",
      skill1:"[Regular Damage]: Deal damage equal to 249,5% of ATK to Enemy x1.<br>[Buff]: Increase Crit Rate of Self by 26,1%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 249% of ATK to Enemy x1. <br>[Additional Damage]: Deal additional damage equal to 142,8% of ATK if Crit Rate + effect is applied.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Gomuske",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Increase Max HP of allies by 5%",
      skill1:"[Buff]: Apply Taunt on Enemy x1, making them priority targets for enemies. (Duration: 37s.)<br>[Buff]: Increase DEF of Self by 41,8%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal damage equal to 107,5% of ATK to Enemy x3. <br>[Buff]: Apply DMG Taken reduction effect of 28,2% on Self if DEF + is applied. (Duration: 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Harima",
      tier:"SR",
      element:"Water",
      type:"Physical",
      class:"Fight",
      leaderSkill:"If there are at least Water Ally x3, increase allies ATK by 15%",
      skill1:"[Regular Damage]: Deal damage equal to 248,6% of ATK to Enemy x1.<br>[Additional Damage]: Deal additional damage equal to 149,1% of ATK to enemies affected by Chill.",
      skill2:"[Regular Damage]: Deal damage equal to 138,9% of ATK to Enemy x4.<br>[Status Effect]: Inflict Blind on Enemy x4 for 20s. (Success Rate: 60%.)",
      inflictEffect:"Blind",
      inflictEffectDesc:"Inflict Blind on Enemy x4 for 20s. (Success Rate: 60%.)",
      chainEffect:"Chill",
      chainEffectDesc:"Deal additional damage equal to 149,1% of ATK to enemies affected by Chill."
    },
    {
      name:"Leon",
      tier:"SR",
      element:"Light",
      type:"Physical",
      class:"Tank",
      leaderSkill:"Increase Crit Resist Rate of Allies by 5%",
      skill1:"[Regular Damage]: Deal damage equal to 232% of ATK to Enemy x1. <br>[Buff]: Increase Counter Rate of Self by 15,7%. (Duration: 40s.)",
      skill2:"[Buff]: Increase Status Effect Resist Rate of Ally x3 by 34,3%. (Success Rate: 100%, Duration: 60s.)<br>[Buff]: Increase DEF of Ally x3 by 34,3%. (Duration 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Machaon",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 248,6% of ATK to Enemy x1. <br>[Additional Damage]: Deal additional damage equal to 140,9% of ATK to enemies with HP that is 50% or lower.",
      skill2:"[Regular Damage]: Deal damage equal to 248,6% of ATK to Enemy x1. <br>[Additional Damage]: Deal additional damage equal to 140,9% of ATK to enemies with HP that is 50% or lower.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Mina",
      tier:"SR",
      element:"Light",
      type:"Physical",
      class:"Fight",
      leaderSkill:"If there are at least 3x Wind allies, increase allies ATK by 15%.",
      skill1:"[Regular Damage]: Deal damage equal to 251,9% of ATK to Enemy x1.<br>[Chain Effect]: Deal damage equal to 251,9% of ATK to enemies affected by Poison.<br>[Chain Effect]: Deal additional damage equal to 5,7% of Max HP when chain attack is triggered.",
      skill2:"[Regular Damage]: Deal damage equal to 212,1% of ATK to Enemy x2. (Sequentially attack Enemy x2.)<br>[Status Effect]: Inflict Silence on Enemy x2 for 20s.(Success Rate: 30%.)",
      inflictEffect:"Silence",
      inflictEffectDesc:"Inflict Silence on Enemy x2 for 20s.(Success Rate: 30%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Deal damage equal to 251,9% of ATK to enemies affected by Poison.<br>[Chain Effect]: Deal additional damage equal to 5,7% of Max HP when chain attack is triggered."
    },
    {
      name:"Nekoroid",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Increase Status Effect Resist Rate of allies by 5%.",
      skill1:"[Healing]: Heal Ally x3 for 101.7% of ATK.<br>[Buff]: Cast Barrier on Ally x3 that blocks up to 495 + 7,2% of ATK worth of damage.",
      skill2:"[Regular Damage]: Deal damage equal to 208% of ATK to Enemy x2.<br>[Debuff]: Remove 1 Buff from Enemy x2.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Niflheim",
      tier:"SR",
      element:"Water",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase DEF of Water allies by 20%",
      skill1:"[Regular Damage]: Deal damage equal to 250,5% of ATK to Enemy x1. <br>[Additional Damage]: Deal additional damage equal to 124,9% of ATK to enemies affected by Chill.",
      skill2:"[Regular Damage]: Deal damage equal to 208,2% of ATk to Enemy x1. <br>[Status Effect]: Inflict Chill that deals damage equal to 3,9% of ATK every 4s for 36s. (Success Rate: 50%.)",
      inflictEffect:"Chill",
      inflictEffectDesc:"Inflict Chill that deals damage equal to 3,9% of ATK every 4s for 36s. (Success Rate: 50%.)",
      chainEffect:"Chill",
      chainEffectDesc:"Deal additional damage equal to 124,9% of ATK to enemies affected by Chill."
    },
    {
      name:"Picaso",
      tier:"SR",
      element:"Water",
      type:"Magic",
      class:"Tank",
      leaderSkill:"Increase Max HP of allies by 5%.",
      skill1:"[Regular Damage]: Deal damage equal to 241,1% of ATK to Enemy x1. <br>[Debuff]: Decrease Block Rate of Enemy x1 by 15,7%. (Duration: 60s.)",
      skill2:"[Regular Damage]: Deal Damage equal to 139,6% of ATK to Enemy x4.<br>[Buff]: Cast Reflected DMG on Self that reflects 20,9% of damage. (Duration: 30s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Proxy",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"If there are at least 3x Dark allies, increase allies ATK by 15%.",
      skill1:"[Regular Damage]: Deal damage equal to 143,3% of ATK to Enemy x4.<br>[Debuff]: Decrease Healing of Enemy x4 by 34,4%. (Duration: 60s.)",
      skill2:"[Regular Damage:] Deal damage equal to 146,7% of ATK to Enemy x3. <br>[Healing]: Heal Ally x2 for 122,6% of ATK.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Redmachina",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"If there are at least 3x Fire allies, increase allies ATK by 15%.",
      skill1:"[Regular Damage]: Deal damage equal to 124,7% of ATK to Enemy x5.",
      skill2:"[Regular Damage]: Deal damage equal to 140,3% of ATK to Enemy x3.<br>[Additional Damage]: Deal additional damage equal to 19,3% of ATK to Wind enemies.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Shinobi",
      tier:"SR",
      element:"Dark",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase Crit Rate of Dark allies by 5%.<br>Increase Crit DMG of Dark allies by 5%.",
      skill1:"[Regular Damage]: Deal damage equal to 249,8% of ATK to Enemy x1.<br>[Status Effect]: Inflict Poison that deals damage equal to 15,7% of ATK every 6s for 30s. (Success Rate: 90%.)",
      skill2:"[Regular Damage]: Deal damage equal to 245,5% of ATK to Enemy x1.<br>[Additional Damage]: Deal additional damage equal to 147,3% of ATK to enemies affected by Poison.",
      inflictEffect:"Poison",
      inflictEffectDesc:"Inflict Poison that deals damage equal to 15,7% of ATK every 6s for 30s. (Success Rate: 90%.)",
      chainEffect:"Poison",
      chainEffectDesc:"Deal additional damage equal to 147,3% of ATK to enemies affected by Poison."
    },
    {
      name:"Surt",
      tier:"SR",
      element:"Wind",
      type:"Magic",
      class:"Fight",
      leaderSkill:"Increase ATK of Fire allies by 20%",
      skill1:"[Regular Damage]: Deal damage equal to 206,2% of ATK to Enemy x1.<br>[Additional Damage]: Deal additional damage equal to 120,6% of ATk to enemies affected by Burn.",
      skill2:"[Regular Damage]: Deal damage equal to 140,8% of ATK to Enemy x4.",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"Burn",
      chainEffectDesc:"Deal additional damage equal to 120,6% of ATk to enemies affected by Burn."
    },
    {
      name:"Teramachina",
      tier:"SR",
      element:"Fire",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase Max HP of Light allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 122,4% of ATK to Enemy x5.",
      skill2:"[Regular Damage]: Deal damage equal to 103,7% of ATK to Enemy x2.<br>[Additional Damage]: Deal additional damage equal to 3,8% of Current HP to Enemy x2. (Max Damage: 150% of ATK.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Victoria",
      tier:"SR",
      element:"Wind",
      type:"Physical",
      class:"Fight",
      leaderSkill:"Increase ATK of allies by 10%.",
      skill1:"[Regular Damage]: Deal damage equal to 139,2% of ATK to Enemy 4%.<br>[Status Effect]: Inflict Poison that deals damage equal to 11,5% of ATK every 6s for 30s. (Success Rate: 30%)",
      skill2:"[Regular Damage]: Deal damage equal to 140,4% of ATK to Enemy x3.<br>[Debuff]: Decrease ATK of Enemy x3 by 22,3%. (Duration: 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },
    {
      name:"Yuri",
      tier:"SR",
      element:"Light",
      type:"Magic",
      class:"Assist",
      leaderSkill:"Increase Crit Rate of Light allies by 5%.<br>Increase Crit DMG of Light allies by 5%.",
      skill1:"[Buff]: Cast Barrier on Ally x3 that blocks up to 561 + 9% of ATK worth of damage. (100% chance to apply effect on Ally x3 with the highest (?), excluding self. Duration: 30s.)",
      skill2:"[Buff]: Decrease Skill Cooldown of Ally x3 by 13s. <br>[Buff]: Increase ATK of Ally x3 by 29,3%. (Duration: 60s.)",
      inflictEffect:"",
      inflictEffectDesc:"",
      chainEffect:"",
      chainEffectDesc:""
    },


    ];
  }


  public getHeroInfoByName (name:String){
    
    let data= this.getHeroData();

    for (let i=0;i<data.length;i++)
    {
      if (data[i].name==name) return data[i];
    }
  }


  public getHeroesByChainEffect(effect:String){
    let ret = [];
    let data= this.getHeroData();

    for (let i=0;i<data.length;i++)
    {
      if (data[i].chainEffect==effect)
      {
        ret.push(data[i]);
      }
    }
    return ret;
  }

  public getHeroesByInflictEffect(effect:String){
    let ret = [];
    let data= this.getHeroData();
    for (let i=0;i<data.length;i++)
    {
      if (data[i].inflictEffect.includes(effect))
      {
        ret.push(data[i]);
      }
    }
    return ret;
  }

  public getHeroData(){
    if(this.LANGUAGE=="EN")
    {
        return this.HERO_DATA;  
    }
    else
    {
      return this.HERO_DATA_VN;   
    }
  }

  public setLaguage(lang:String){
    this.LANGUAGE = lang;
  }

  BannerAd() {
    if(cordova===undefined||!cordova) return;

    let bannerConfig: AdMobFreeBannerConfig = {
      //isTesting: true, // Remove in production
      autoShow: true,
      //id: "ca-app-pub-5927171719338167/1958560374" //not appstore
      //id: "ca-app-pub-3940256099942544/6300978111" //Google
      id: "ca-app-pub-5927171719338167/4842748166" //appstore
    };
    this.admobFree.banner.config(bannerConfig);
 
    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch();
  }
 
  InterstitialAd() {
    if(cordova===undefined||!cordova) return;
    //Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.interstitial.show().then(() => {
      })
        .catch();
    })
      .catch();
  }
 
  RewardVideoAd() {
    if(cordova===undefined||!cordova) return;
    //Check if Ad is loaded
    this.admobFree.rewardVideo.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.rewardVideo.show().then(() => {
      })
        .catch(e => alert("show " + e));
    })
      .catch(e => alert("isReady " + e));
  }

}
