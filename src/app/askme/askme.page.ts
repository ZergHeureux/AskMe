import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-askme',
  templateUrl: './askme.page.html',
  styleUrls: ['./askme.page.scss'],
})
export class AskmePage implements OnInit {
  story = [[],[],[],[],[]];
  actualStory = 0;
  editedElement;
  cachedStory = []
  clickedElement = document.getElementById("0");
  constructor() {
    caches.open('story').then((c) => {
      c.matchAll().then(r => {
        console.log(r)
        var h = 0;
        r.forEach(element => {
          this.story[h]=[]
          element.json().then(j => {
            var i = 0;
            console.log("j",j,"h",h)
            j.forEach(element => {
              var obj = { id: i, text: element.text, y: element.y, n: element.n, i: element.i, actionToCast: element.actionToCast, parameters: element.parameters }
              this.story[h].push(obj);
              i++;
            });
            h++;
          });
        })
        console.log(this.story[h])
      }).then(()=>{console.log(this.story)})
    })
  }
  checkClicked(elt, color) {
    if (this.clickedElement != null) {
      this.clickedElement.style.borderLeftColor = "";
      this.clickedElement.style.borderLeftWidth = "";
      this.clickedElement.style.borderStyle = "";
    }
    elt.style.borderLeftColor = color;
    elt.style.borderLeftWidth = "1em";
    elt.style.borderStyle = "double";
    this.clickedElement = elt;
  }

  setCacheStory() { };
  getCacheStory() { };
  scrollTo(caster, idt) {
    var elt;
    if (idt == null) {
      var obj = { id: this.story[this.actualStory].length, text: "", y: null, n: null, i: null, actionToCast: 0, parameters: [] }
      this.story[this.actualStory].push(obj);
      caster = this.compareAndReplaceElementslink(caster, null, this.story[this.actualStory].length - 1);
    }
    else {
      elt = document.getElementById(idt);
      this.checkClicked(elt, "red")
      elt.scrollIntoView();
    }
  }
  compareAndReplaceElementslink(element, toCompare, replaced) {
    if (element.y == toCompare) {
      element.y = replaced
    }
    else {
      if (element.n == toCompare) {
        element.n = replaced
      }
      else {
        if (element.i == toCompare) {
          element.i = replaced
        }
      }
    }
    return element;
  }
  editCard(elt) {
    this.checkClicked(document.getElementById(elt.id), "green")
    this.editedElement = elt;
    document.getElementById("editor").style.display = "flex";
  }
  deleteCard(elt) {
    if (elt.id != 0) {
      this.story[this.actualStory].splice(elt.id, 1);
      console.log("deleted :", elt.id);
      this.story[this.actualStory].forEach(element => {
        if (element.id < elt.id) {
          element = this.compareAndReplaceElementslink(element, elt.id, null);
          if (element.y - 1 > 1) element.y--;
          if (element.n - 1 > 1) element.n--;
          if (element.i - 1 > 1) element.i--;
        }
        else {
          element.id--;
          element.y--;
          element.n--;
          element.i--;
        }
      });
    }
    else console.log("you need to keep a start !")
  }
  ngOnInit() {
  }
  saveStory() {
    console.log("savestory : ",this.actualStory);
    caches.open("story").then(c => {
      c.match('/story'+this.actualStory+'.json').then((m)=>{
        const jsonResponse = new Response(JSON.stringify(this.story[this.actualStory]));
        c.put('/story'+this.actualStory+'.json', jsonResponse)
      })
    });
  }
  isDisplayed = false
  displayButton() {
    if (!this.isDisplayed) {
      this.isDisplayed = true;
      document.getElementById("buttonDivInput").style.display = "flex";
    }
  }
  maskButton() {
    if (this.isDisplayed) {
      this.isDisplayed = false;
      document.getElementById("buttonDivInput").style.display = "none";
    }
  }
  closeEdit() {
    this.editedElement = null;
    document.getElementById("editor").style.display = "none";
  }
  sendData() {
    if ((<HTMLInputElement>document.getElementById("buti")).value
      || (<HTMLInputElement>document.getElementById("buty")).value
      || (<HTMLInputElement>document.getElementById("butn")).value) { this.editedElement.actionToCast = 2; }
    if (this.editedElement.actionToCast == 2) {
      this.editedElement.parameters = [
        (<HTMLInputElement>document.getElementById("buty")).value,
        (<HTMLInputElement>document.getElementById("butn")).value,
        (<HTMLInputElement>document.getElementById("buti")).value,
      ];
    }
    this.editedElement.text = (<HTMLInputElement>document.getElementById("textInput")).value
    document.getElementById("editor").style.display = "none";
  }
  loadStory(storyIndex){
    console.log(storyIndex,this.actualStory)
    this.actualStory=storyIndex;
    console.log(storyIndex,this.actualStory)
    if (this.story[this.actualStory].length==0){
      var obj = { id: this.story[this.actualStory].length, text: "", y: null, n: null, i: null, actionToCast: 0, parameters: [] }
      this.story[this.actualStory].push(obj);
    }
    
  }
}
