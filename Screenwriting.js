let doc = document.getElementById("document");

/*class Screenplay {
    constructor(){
        this.document= new Document();
    }
}

class Document {
    constructor(){
        this.act = new Act();
    }
}
class Act{
    constructor(){
    this.scene = new Scene();
}
}
class Scene{
    constructor(){
        this.text = new Line();
    }
}
class Line {
    constructor(){
        this.written = " ";
        this.keyCommands = new Command();
        window.addEventListener("keypress", (event) => {
            this.inputKey(event);
        });
        window.addEventListener("keydown", (event) => {
            this.backspace(event);
        });
        this.doc = document.getElementById("document");

    }

    backspace(event){
        if(event.keyCode == 8){
            let str = this.written;
            let strRmv = str.substring(0, str.length - 1);
            this.written = strRmv
            doc.textContent = this.written;
        }
    }

    inputKey(event){
        if(event.keyCode !== 13){
           this.written += event.key;
        }
        doc.textContent = this.written;
    }
}
class Command {
    constructor(){
        this.font = 1;
        this.spacing = 1;
  window.addEventListener("keydown", (event) => {
      this.shortcuts(event)});
    }

  shortcuts(KeyboardEvent){
      if (KeyboardEvent.shiftKey){
      if(Event.key = "q"){
          this.doc.style.fontSize = this.font + 1 + "px";
      }
      if(Event.key = "b" ){
         this.doc.style.fontWeight = "bold";
      }
      if(Event.key = "i"){
          this.doc.style.fontStyle = "italic";
      }
      if(Event.key = "r"){
          this.doc.style.fonstyle = "";
          this.doc.style.fontWeight = "";
      }
        if(Event.key = "t"){
            this.spacing = 1 + 1;
        }
        if(Event.key = "a"){
            this.doc.style.textTransform = "capitalize";
        }
          if(Event.keyCode = 13){
              this.lines = new Line();
          }
      if(this.font >= 5){
      this.font = 1;
}
}
}
}


let screenplay = new Screenplay();*/

class Screenplay {
constructor() {
this.document = new Document();
window.addEventListener("keydown", (event) => {
this.processKeyDown(event);
});
}

processKeyDown(event) {

// You have to change this next line of code if you want to always be editing the last line of the last scene..etc.
let currentLine = this.document.getCurrentAct().getCurrentScene().getCurrentLine();

if (event.keyCode == 8) {
let str = currentLine.written;
let strRmv = str.substring(0, str.length - 1);
currentLine.written = strRmv;
} else if (event.keyCode == 13) {
// Create a new line?
// You need to figure out how to add a line break - like a new <p> element to the document.
// That needs to be done in the Document - in renderDocument, not here.
this.document.getCurrentAct().getCurrentScene().addLine();

} else {
currentLine.written += event.key;
}

// This is currently how you have it, but this only allows you to write lines to the screen...
this.document.doc.textContent = currentLine.written;

// I would suggest doing something more like this:
this.document.renderDocument();
}

}

class Document {
constructor() {
this.doc = document.getElementById("document");
this.acts = [new Act()];
}

addAct() {
this.acts.push(new Act());
}

getCurrentAct() {
return this.acts[this.acts.length - 1];
}

renderDocument() {
// This code is will need to be modified because its really here that you "build" the DOM for the display.
// You could have each class responsible for its own rendering though...have each line render itself.
// Not sure, this is going to take some thinking.
// This line only deals with a single line document.
// this.document.doc.textContent = currentLine.written;
// I think what makes the most sense here is to have a for loop that goes through all the document's current lines
// And then updates the DOM - this is where you could put in your "line" breaks.
// You could also allow each parent to render its children...like this:
for (let i = 0; i < this.acts.length; i++){
// This is where you need to decide how to put it all together on the page...
console.log(this.acts[i].render());

}
}
}

class Act {
constructor() {
this.scenes = [new Scene()];
}

addScene() {
this.scenes.push(new Scene());
}

getCurrentScene() {
return this.scenes[this.scenes.length - 1];
}

render() {
let act = document.createElement("div");
for(let i = 0; i < this.scenes.length; i++) {
// Go through all the scenes and package them up as DOM elements...
act.appendChild(this.scenes[i].render());
}
return act;
}
}

class Scene {
constructor() {
this.lines = [new Line()];
}

addLine() {
this.lines.push(new Line());
}

getCurrentLine() {
return this.lines[this.lines.length - 1];
}

render() {
let scene = document.createElement("div");
for(let i = 0; i < this.lines.length; i++) {
let line = document.createElement("p");
line.textContent = this.lines[i].written;
scene.appendChild(line);
}
return scene;
}
}

class Line {
constructor() {
console.log("new Line created");
this.written = " ";
//this.keyCommands = new Command();
}

}


// I think this should be all in the screenplay app class...
// It is the screenplay app class that decides how to format based on whether we are creating a new scene, etc.
//class Command {
// constructor() {
// this.font = 1;
// this.spacing = 1;
// window.addEventListener("keydown", (event) => {
// this.shortcuts(event)
// });
// }
// shortcuts(KeyboardEvent) {
// if (KeyboardEvent.shiftKey) {
// if (Event.key = "q") {
// this.doc.style.fontSize = this.font + 1 + "px";
// }
// if (Event.key = "b") {
// this.doc.style.fontWeight = "bold";
// }
// if (Event.key = "i") {
// this.doc.style.fontStyle = "italic";
// }
// if (Event.key = "r") {
// this.doc.style.fonstyle = "";
// this.doc.style.fontWeight = "";
// }
// if (Event.key = "t") {
// this.spacing = 1 + 1;
// }
// if (Event.key = "a") {
// this.doc.style.textTransform = "capitalize";
// }
// if (Event.keyCode = 13) {
// this.lines = new Line();
// }
// if (this.font >= 5) {
// this.font = 1;
// }
// }
// }
//}
let screenplay = new Screenplay();
