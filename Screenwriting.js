let doc = document.getElementById("document");

class Screenplay {
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
      if(Event.key = "q" || Event,key = "Q"){
          this.doc.style.fontSize = 1 + 1 + "px";
          this.font = 1 + 1;
      }
//      if(Event.key = "b" || Event.key = "B"){
//         this.doc.style.fontWeight = "bold";
//      }
//      if(Event.key = "i" || Event.key = "I"){
//          this.doc.style.fontStyle = "italic";
//      }
//      if(Event.key = "r" || Event.key = "R"){
//          this.doc.style.fonstyle = "";
//          this.doc.style.fontWeight = "";
//      }
//        if(Event.key = "t" || Event.key = "T"){
//            this.spacing = 1 + 1;
//        }
//        if(Event.key = "a" || Event.key = "A"){
//            this.doc.style.textTransform = "capitalize";
//        }
          if(Event.keyCode = 13){
              this.lines = new Line();
          }
      if(this.font >= 5){
      this.doc.style.fontSize = 1 + "px";
      this.font = 1;
}
}
}
}


let screenplay = new Screenplay();
