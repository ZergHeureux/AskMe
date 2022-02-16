import { Component } from '@angular/core';
//Stage of discussion : 1.0
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

  textToDisplay = "Bonjour, vous allez-bien ?";
  actualText = "";
  actualState = 0;
  textState = 0;
  answerPointing = [0,1,2,3]
  isLifeAsking=false;
  valeurs=["leave me","oui","non","jcp"];
  questions=[ // {text:"",y:1,n:2,i:3},
/*0*/{text:"Bonjour, vous allez bien ?",y:1,n:2,i:3},
    {text:"C'est dommage ça ! Vous auriez pu profiter de mes conseils d'info-psy ! Vous avez un nom ?",y:4,n:5,i:6},
    {text:"Oooooooh ! Si seulement je savais être un info-psy ! Vous devriez aller mieux ! Vous voulez aller mieux ?",y:7,n:8,i:9},
    {text:"D'après ma base de données vous irez mieux en me parlant ! On essai ?",y:7,n:8,i:9},
    {text:"Tant pis !! Admettons que je vous appelle mon Loulou ! Ca vous va ?",y:10,n:11,i:12},
/*5*/{text:"Oh ! Moi non plus ! mais moi je suis juste un bout de code ! Vous meritez mieux ! vous serez ... mon Loulou ! Ca vous va ?",y:10,n:11,i:12},
    {text:"Vous ne savez pas ? Vous seriez pas un peu débile ou perdu ? Je vais juste vous appeler mon Loulou ok ?",y:10,n:11,i:12},
    {text:"Super ! Alors commencons par apprendre à vous connaitre ! Vous avez un joli ptit nom ? ;)",y:4,n:5,i:6},
    {text:"Mais siiiii ! Je suis doué pour rendre mieux les gens (je crois) ! Tu as un nom ma rockstar ?",y:4,n:5,i:6},
    {text:"Tout le monde rêve d'aller mieux et d'après internet il suffit de ... deee.... oublions ce qu'il dit !! Pour commencer : as-tu un nom ?",y:4,n:5,i:6},
/*10*/{text:"Mer-ve-illeux ! Alors parles moi de toi mon Loulou ! Tu es un garçon, une fille ou autre ?",y:13,n:14,i:15},
    {text:"si.......................................Bon parles moi de toi mon Loulou ! Tu es un garçon, une fille ou autre ?",y:13,n:14,i:15},
    {text:"sinon c'est Xb-4710-TihJ-137-PKIFk comme mon code wifi alors je crois que le choix est vite fait non ?",y:16,n:17,i:18},
    {text:"Oui ? Serieusement ? JE TE DEMANDE CE QUE TU ES TU ME DIS OUI ?! ..... Gardons notre calme ... Mauvaise question ... Es-tu vivant ?",y:19,n:20,i:21},
    {text:"Non ? ah.. tu te sens vide ? Je comprend ca ... enfin non je comprend pas mais je pense pouvoir comprendre... tu penses pouvoir te sentir quelque chose un jour ?",y:22,n:23,i:24},
/*15*/{text:"Ah... l'identité hein ! Un sacré b***** ce truc la aussi... J'aimerai en avoir une ... Tu voudrais bien me donner un nom ??",y:25,n:26,i:27},
    

  ]
  answers={1:"damn",2:"wow",3:"désolé d'avoir demandé",4:"pardon si tu as cru que ca m'interessé",5:""}
  constructor() {
    setTimeout(() => {
      this.backGroundRotation();
    }, 1000);
    this.textRotation(this.textToDisplay);
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
  getValeur(val){
    return this.valeurs.lastIndexOf(val)
  }
  answerClick(val){

  var ans = this.answerPointing[this.getValeur(val)];
  var q = this.questions[ans];
  if (!this.isLifeAsking){
    this.textToDisplay=q.text;
    this.actualText="";
    this.textState=0;
    this.textRotation(this.textToDisplay);
    this.actualState=val;
    this.answerPointing[1] = q.y;
    this.answerPointing[2] = q.n;
    this.answerPointing[3] = q.i;
  }
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  textRotation(text:String){
    var elt = text.split('');
    if (this.textState%2>0){
      var rand = this.getRandomInt(1,6);
      var audio = new Audio("/assets/sound/bop"+rand+".mp3");
      audio.play();
    }
    this.actualText=this.actualText+elt[this.textState];
    this.textState++;
    if (this.textState<=text.length-1)
    {
      setTimeout(() => {
        this.textRotation(text)
      }, 50);
    }
  }
}
