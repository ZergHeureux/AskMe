import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { $ } from 'protractor';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-askme',
  templateUrl: './askme.page.html',
  styleUrls: ['./askme.page.scss'],
})
export class AskmePage implements OnInit {
  story = [[],[],[],[],[]];
  actualStory = 0;
  cUser:any;
  storydownload = "story0.json";
  editedElement;
  downloadJsonHref=null;
  cachedStory = []
  clickedElement = document.getElementById("0");
  constructor(private sanitizer: DomSanitizer) {
    caches.open('story').then((c) => {
      c.matchAll().then(r => {
        var h = 0;
        r.forEach(element => {
          this.story[h]=[]
          element.json().then(j => {
            var i = 0;
            j.forEach(element => {
              var obj = { id: i, text: element.text, y: element.y, n: element.n, i: element.i, actionToCast: element.actionToCast, parameters: element.parameters }
              this.story[h].push(obj);
              i++;
            });
            h++;
          });
        })
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
  ngOnInit() {
  }
  saveStoryFile(){
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.story[this.actualStory])));
    this.downloadJsonHref = uri;
  }
  onFileLoad(event) {
    const f = event.target.files[0];
    const reader = new FileReader();
    reader.onload = ((theFile) => {
      return (e) => {
        try {
          const json = JSON.parse(<string>e.target.result);
          const resSTR = JSON.stringify(json);
          this.story[this.actualStory] = JSON.parse(resSTR);
        } catch (ex) {
          alert('exception when trying to parse json = ' + ex);
        }
      };
    })(f);
    reader.readAsText(f);
  }
  
  saveStory() {
    console.log("savestory : story"+this.actualStory);
    caches.open("story").then(c => {
      c.match('/story'+this.actualStory+'.json').then((m)=>{
        const jsonResponse = new Response(JSON.stringify(this.story[this.actualStory]));
        c.put('/story'+this.actualStory+'.json', jsonResponse)
      })
    });
  }
  isDisplayed = false
  displayButton() {
      document.getElementById("buttonDivInput").style.display = "flex";
  }
  maskButton() {

      document.getElementById("buttonDivInput").style.display = "none";
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
    this.actualStory=storyIndex;
    this.storydownload="story"+this.actualStory+".json";
    if (this.story[this.actualStory].length==0){
      var obj = { id: this.story[this.actualStory].length, text: "", y: null, n: null, i: null, actionToCast: 0, parameters: [] }
      this.story[this.actualStory].push(obj);
    }
  }
  checkParent(id){
    var parents=[]
    this.story[this.actualStory].forEach(element=>{
      if (element.y==id||element.n==id||element.i==id)parents.push(element);
    })
    return parents;
  }
  reduceParentAnswer(id){
    var p=this.checkParent(id)
    p.forEach(elt=>{
      if (elt.y>id && elt.y!=null)this.story[this.actualStory][elt.id].y--;
      if (elt.n>id && elt.n!=null)this.story[this.actualStory][elt.id].n--;
      if (elt.i>id && elt.i!=null)this.story[this.actualStory][elt.id].i--;
    });
    this.story[this.actualStory].forEach(card=>{
      if (p.indexOf(card)>=0){
        console.log(card.id," trouvé")
      }
      else
      {
        if(card.y>0&&card.y!=null)card.y--;
        if(card.n>0&&card.n!=null)card.n--;
        if(card.i>0&&card.i!=null)card.i--;
      }
    })
  }
  reduceIdOverDeletion(id){
    this.story[this.actualStory].forEach(element => {
      if (element.id>id)this.story[this.actualStory][element.id].id--;
    });
  }
  deleteCard(elt){
    if (elt.id!=0){
      var p=this.checkParent(elt.id);
      this.reduceParentAnswer(elt.id);
      p.forEach(parent=>{
        this.compareAndReplaceElementslink(parent,elt.id,null);
      });
      this.reduceIdOverDeletion(elt.id);
      this.story[this.actualStory].splice(elt.id, 1);
    }
    else window.alert("you need to keep a start !")
  }
}
