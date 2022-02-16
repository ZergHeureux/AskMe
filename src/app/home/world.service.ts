import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor() { }
  breakTile(plan,row,col){
    plan[row][col]="00";
    return plan
  }
  
}
