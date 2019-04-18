class Screenplay {
    constructor(){
        this.document= new Document();
    }
}

class Document {
    constructor(){
        this.text = new Text();
    }
}

class Text {
    constructor(){
        this.font = 1;
        this.spacing = 1;
        this.written = " ";
        this.keycommands = new Key

    }
 document.addEventListener("keypress", changeFont);

function changeFont(){
    if (keycommands.ctrlKey){
      if(event.key = "b" || event.key = "B"){
          this.font = 2;
      }
      if(event.key = "i" || event.key = "I"){
          this.font = 3;
      }
      if(event.key = "j" || event.key = "J"){
          this.font = 4;
      }
    }
}
}

class Key {
    constructor(){

    }
}
