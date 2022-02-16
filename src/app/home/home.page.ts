import { Component } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

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

  actualText = "Bonjour, vous allez-bien ?";
  actualState = 0;
  ans;
  q;
  answerPointing = [0,1,2,3]
  isLifeAsking=false;
  valeurs=["leave me","oui","non","jcp"];
  questions=[ // {text:"",y:1,n:2,i:3},
    {text:"Bonjour, vous allez bien ?",y:1,n:2,i:3},
    {text:"C'est dommage ça ! Vous auriez pu profiter de mes conseils d'info-psy ! Vous avez un nom ?",y:4,n:5,i:6},
    {text:"Oooooooh ! Si seulement je savais être un info-psy ! Vous devriez aller mieux ! Vous voulez aller mieux ?",y:7,n:8,i:9},
    {text:"D'après ma base de données vous irez mieux en me parlant ! On essai ?",y:10,n:11,i:12},
    {text:"Tant pis admettons que je vous appelle mon Loulou ! Ca vous va ?",y:13,n:14,i:15},
    {text:"Oh ! Moi non plus ! mais moi je suis juste un bout de code ! Vous meritez mieux ! vous serez ... mon Loulou ! Ca vous va ?",y:13,n:14,i:15},
    {text:"Vous ne savez pas ? Vous seriez pas un peu débile ou perdu ? Je vais juste vous appeler mon Loulou ok ?",y:13,n:14,i:15},
    
  ]
  answers={1:"damn",2:"wow",3:"désolé d'avoir demandé",4:"pardon si tu as cru que ca m'interessé",5:""}
  constructor() {
    setTimeout(() => {
      this.backGroundRotation();
    }, 1000);
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
    this.ans = this.answerPointing[this.getValeur(val)];
    this.q = this.questions[this.ans];
    console.log(this.ans,this.q)
    if (!this.isLifeAsking){
      this.actualText=this.q.text;
      this.actualState=val;
      this.answerPointing[1] = this.q.y;
      this.answerPointing[2] = this.q.n;
      this.answerPointing[3] = this.q.i;
    }
  }
}
