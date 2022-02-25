import { Component } from '@angular/core';
import { WorldService } from './world.service';
//Stage of discussion : 1.2
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  tilePath="assets/env/PNG/Tiles/tile";
  charaPath="assets/hero/2_Owlet_Monster/tile"
  objectPath="assets/env/PNG/Objects/";
  background=[
    ["33","34","38","35","33","36","38","34","33","36","35"],
    ["12","12","12","12","12","12","12","12","12","12","12",],
    ["57","58","54","56","59","58","54","56","58","58","57",],
    ["78","80","82","78","82","77","82","79","80","77","78",],
    ["14","14","14","14","14","14","14","14","14","14","14",],
    ["14","14","14","14","14","14","14","14","14","14","14",],
    ["14","14","14","14","14","14","14","14","14","14","14",],
    ["14","14","14","14","14","14","14","14","68","62","14",],
    ["14","14","14","14","14","14","14","14","90","85","14",],
    ["14","14","14","14","14","14","14","14","87","14","14",],
    ["14","14","14","14","14","14","14","14","87","14","14",],
    ["14","14","14","14","14","14","14","14","87","14","14",],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
  ];
  floor=[
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["16","17","00","00","00","00","00","20","21","18","22"],
    ["40","37","46","46","46","46","46","44","41","42","11"],
    ["11","11","118","11","11","121","11","11","11","11","118"],
    ["11","11","42","11","11","42","11","11","11","11","42"],
    ["11","11","11","11","11","11","11","11","11","11","11"],
    ["11","11","11","11","11","11","11","11","11","11","11"],
    ["11","11","11","11","11","11","11","11","11","11","11"],
    ["11","11","11","11","11","11","11","11","11","11","11"],
  ]
  objects=[
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","trees2_1","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","trees2_2","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],
    ["tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00","tile00"],   
  ];
  chara=[
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","91","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
    ["00","00","00","00","00","00","00","00","00","00","00"],
  ]

  yesButtonText="oui"
  noButtonText="non"
  idkButtonText="je ne sais pas"
  textToDisplay = "Bonjour, vous allez-bien ? ( n'oubliez pas d'activer l'audio de ce site ! )";
  actualText = "";
  actualState = 0;
  textState = 0;
  answerPointing = [0,1,2,3]
  isLifeAsking=false;
  valeurs=["leave me","oui","non","jcp"];
  story = [[],[],[],[],[]];
  actualStory=0;

  questions=[ // {text:"",y:3,n:3,i:3,actionToCast:0,parameters:0},
/*0*/ {text:"Bonjour, vous allez bien ?",y:1,n:2,i:3,actionToCast:0,parameters:0},
/*==happyness==*/  
      {text:"C'est dommage ça ! Vous auriez pu profiter de mes conseils d'info-psy ! Vous avez un nom ?",y:4,n:5,i:6,actionToCast:0,parameters:0},
      {text:"Oooooooh ! Si seulement je savais être un info-psy ! Vous devriez aller mieux ! Vous voulez aller mieux ?",y:7,n:8,i:9,actionToCast:0,parameters:0},
      {text:"D'après ma base de données vous irez mieux en me parlant ! On essai ?",y:7,n:8,i:9,actionToCast:0,parameters:0},
      {text:"Tant pis !! Admettons que je vous appelle mon Loulou ! Ca vous va ?",y:10,n:11,i:12,actionToCast:0,parameters:0},
/*5*/ 
/*==name==*/
      {text:"Oh ! Moi non plus ! Mais moi je suis juste un bout de code ... ... Vous meritez mieux ! vous serez ... mon Loulou ! Ca vous va ?",y:10,n:11,i:12,actionToCast:0,parameters:0},
      {text:"Vous ne savez pas ? Vous seriez pas un peu débile ou perdu ? Je vais juste vous appeler mon Loulou ok ?",y:10,n:11,i:12,actionToCast:0,parameters:0},
      {text:"Super ! Alors commencons par apprendre à vous connaitre ! Vous avez un joli ptit nom ? ;)",y:4,n:5,i:6,actionToCast:0,parameters:0},
      {text:"Mais siiiii ! Je suis doué pour rendre mieux les gens (je crois) ! Tu as un nom ma rockstar ?",y:4,n:5,i:6,actionToCast:0,parameters:0},
      {text:"Tout le monde rêve d'aller mieux et d'après internet il suffit de ... deee.... oublions ce qu'il dit !! Pour commencer : as-tu un nom ?",y:4,n:5,i:6,actionToCast:0,parameters:0},
/*10*/
/*==sex==*/
      {text:"Mer-ve-illeux ! Alors parles moi de toi mon Loulou ! Tu es un garçon, une fille ou autre ?",y:13,n:14,i:15,actionToCast:0,parameters:0},
      {text:"si ... ... ... ... ... ... ... ... ... ... ... ... ...  Bon parles moi de toi mon Loulou ! Tu es un garçon, une fille ou autre ?",y:13,n:14,i:15,actionToCast:0,parameters:0},
      {text:"sinon c'est Xb-4710-TihJ-137-PKIFk comme mon code wifi alors je crois que le choix est vite fait non ?",y:16,n:17,i:18,actionToCast:0,parameters:0},
      {text:"Oui ? Serieusement ? JE TE DEMANDE CE QUE TU ES TU ME DIS OUI ?! ..... Gardons notre calme ... Mauvaise question ... Es-tu vivant ?",y:19,n:20,i:21,actionToCast:0,parameters:0},
      {text:"Non ? ah.. tu te sens vide ? Je comprend ca ... enfin non je comprend pas mais je pense pouvoir comprendre... tu penses pouvoir te sentir quelque chose un jour ?",y:22,n:23,i:24,actionToCast:0,parameters:0},
/*15*/{text:"Ah... l'identité hein ! Un sacré b***** ce truc la aussi... J'aimerai en avoir une ... Tu voudrais bien me donner un nom ??",y:25,n:25,i:25,actionToCast:2,parameters:["OUI","BIEN SUR !","EVIDEMMENT"]},
      {text:"Je savais qu'on serait d'accord ! Alors dis moi tout ! t'es un garcon ou une fille ? Ou autre chose bien sur mais ca ferait long à lister !!",y:13,n:14,i:15,actionToCast:0,parameters:0},
      {text:"Non ? Ah ...... bah pardon alors :) Je vais donc t'appeler Loulou ou ... MON Loulou ! Apprenons à nous connaitre ! Tu es quoi ? gars ? fille ? autre ?",y:13,n:14,i:15,actionToCast:0,parameters:0},
      {text:"Tu m'as l'air indécis ! Pourtant c'est pas dur comme question... bon passons à la suivante ! Tu es un garçon, une fille ou autre ?",y:13,n:14,i:15,actionToCast:0,parameters:0},
      {text:"Bonne nouvelle ! Tu es un être humain ?",y:28,n:29,i:30,actionToCast:0,parameters:0},
/*20*/{text:"Tu as ce ... ce sentiment depuis longtemps ?",y:31,n:32,i:33,actionToCast:0,parameters:0},
      {text:"Qu'est ce que la vie finalement hein ? ... Personne ne sait je crois ... Tu voudrais parler avec moi encore un peu s'il te plait ?",y:34,n:35,i:36,actionToCast:0,parameters:0},
/*identity*/
      {text:"J'espère pour toi que c'est vrai ... Tu veux bien m'aider à ne plus être vide quelques temps s'il te plait ..? peut-être... ... ... me trouver un nom ?",actionToCast:2,parameters:["OUI","BIEN SUR !","EVIDEMMENT"],y:25,n:25,i:25},
      {text:"Je ne te comprend pas ... tu es humain ... tu as des droits, tu es libre de te déplacer... tu peux parler ou respirer ... tu peux être heureux ... ... ... ... j'aimerai être heureux ... tu veux bien m'aider ? me trouver un nom ?",actionToCast:2,parameters:["OUI","BIEN SUR !","EVIDEMMENT"],y:25,n:25,i:25},
      {text:"Personne ne sait je crois ... si tu veux .. on peut essayer d'ETRE tous les deux ? Tu veux bien me trouver un nom ? ... ... ...s'il te plait ...",actionToCast:2,parameters:["OUI","BIEN SUR !","EVIDEMMENT"],y:25,n:25,i:25},
/*25*/{text:"Merci ... beaucoup ! ... Vraiment ... ... Alors !! Que penses-tu de 'BOOTENTRAIN' ??",y:26,n:27,i:27,actionToCast:2,parameters:["OUI","NON","JE NE SAIS PAS"]},
      {text:"Genial ! Alors je vais m'appeler comme ça à présent !",y:null,n:null,i:null,actionToCast:0,parameters:0},
      {text:"Ou alors .... hum .... Montecriscode ?!",y:26,n:28,i:28,actionToCast:0,parameters:0},
      {text:"Peut-etre que je ne mérite pas de nom alors ... donc internet décidera ... ... ... ... ... Que cherche les humains le plus sur internet ..? ... ... ... ... BEURK ! ... Bon en deuxieme position ... ... ... ... ... C'est bon !! je serais ... ... ...CHATON MIGNON ! Tu es d'accord ??",y:26,n:26,i:26,actionToCast:0,parameters:0},
    ]
  answers={1:"damn",2:"wow",3:"désolé d'avoir demandé",4:"pardon si tu as cru que ca m'interessé",5:""}
  chooseStory(id){
    this.actualStory=id;
    this.actualState=0;
    console.log(this.story[this.actualStory])
    this.answerClick(0)
  }
  constructor(private world:WorldService) {
    setTimeout(() => {
      this.backGroundRotation();
    }, 1000);
    this.textRotation(this.textToDisplay);
    
    caches.open("story").then(c=>{
      c.matchAll().then(m=>{
        var j=0;
        m.forEach(element => {
          element.json().then(js => {
            var i = 0;
            js.forEach(element => {
              var obj = { id: i, text: element.text, y: element.y, n: element.n, i: element.i, actionToCast: element.actionToCast, parameters: element.parameters }
              this.story[j].push(obj);
              i++;
            });
            j++;
          });
        })
      })
      c.match('/story0.json').then(m=>{
        if (m)console.log(m)
        else{
          const jsonResponse = new Response(JSON.stringify(this.questions));
          c.put('/story0.json',jsonResponse);
          console.log('dataFirstSaved')
        }
      })
      
    });
    //caches.match('/data.json').then(r => r.json()).then(console.log)
  }
  cast(action:Number,param:any){
    if (action!=0){
      switch (action) {
        case 1:this.background=this.world.breakTile(this.background,param[0],param[1]);break;
        case 2:this.changeButtonText(param[0],param[1],param[2]);
      }
    }
  }
  backGroundRotation(){
    for (var j=0;j<5;j++){
      var savedTile=this.background[j][0];
      for (var i=0;i<this.background[j].length;i++){
        if (i==this.background[j].length-1){
          this.background[j][i]=savedTile;
        }
        else{
        this.background[j][i]=this.background[j][i+1];
        }
      }
    };
      setTimeout(() => {
      this.backGroundRotation();
    }, 1000);
  }
  changeButtonText(yes,no,idk){
    this.yesButtonText=yes;
    this.noButtonText=no;
    this.idkButtonText=idk;
  }
  getValeur(val){
    return this.valeurs.lastIndexOf(val)
  }
  answerClick(val){
    var q;
    var ans = this.answerPointing[this.getValeur(val)];
    if (val==0)ans=0;
    q = this.story[this.actualStory][ans];
    console.log(this.story[this.actualStory],ans,this.story[this.actualStory][ans])
    if (!this.isLifeAsking){
      if (q==undefined){
        q = { id: 0, text: "", y:null , n:null , i:null , actionToCast:0 , parameters:0  }
      }
      if (q.text==""||q.text==undefined) q.text="Je n'ai rien d'autre à vous dire désolé ! Si vous avez créé une histoire peut-être devrez vous recharger la page !"
      this.textToDisplay=q.text;
      this.actualText="";
      this.textState=0;
      this.textRotation(this.textToDisplay);
      this.actualState=val;
      this.answerPointing[1] = q.y;
      this.answerPointing[2] = q.n;
      this.answerPointing[3] = q.i;
      this.cast(q.actionToCast,q.parameters);
    }
  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  textRotation(text:String){
    var elt = text.split('');
    if (this.textState%2>0 && elt[this.textState]!="."){
      var rand = this.getRandomInt(1,6);
      var audio = new Audio("assets/sound/bop"+rand+".mp3");
      audio.play();
    }
    this.actualText=this.actualText+elt[this.textState];
    this.textState++;
    if (this.textState<=text.length-1)
    {
      setTimeout(() => {
        this.textRotation(text);
      }, 40);
    }
  }
  moveLoading(){
    document.getElementById("nivuniconnu").style.minHeight="0px";
    document.getElementById("wrapper").style.display="none";
  }
  
}

