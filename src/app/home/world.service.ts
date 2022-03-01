import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  charaPath="assets/hero/2_Owlet_Monster/tile"
  constructor() { }
  breakTile(plan,row,col){
    plan[row][col]="00";
    return plan
  }
  moveLeft(row){
    var c=document.getElementById("t91").children;
    if (c.item(0).getAttribute("src")==this.charaPath+'91.png')
    {
      c.item(0).setAttribute("src",this.charaPath+'92.png');
    }
    
  };
  
}
