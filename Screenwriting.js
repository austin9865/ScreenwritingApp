let doc = document.getElementById("document");

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
        this.written = " ";
        this.keyCommands = new Command;
        this.keyInput = new Key();
    }
    fuction inputKey(){
        this.letters += Event.key;
        console.log(this.letters);
    }

document.addEventListener("keypress", inputKey())
document.addEventListener("keydown", inputkey())
}


class Command {
    constructor(){
        this.font = 1;
        this.spacing = 1;
    }

    function shortcuts(){
    if (KeyboardEvent.ctrlKey){
      if(Event.key = "q" || Event,key = "Q"){
          this.font = 1;
      }
      if(Event.key = "w" || Event.key = "W"){
          this.font = 2;
      }
      if(Event.key = "e" || Event.key = "E"){
          this.font = 3;
      }
      if(Event.key = "r" || Event.key = "R"){
          this.font = 4;
      }
        if(Event.key = "t" || Event.key = "T"){
            this.spacing = 1;
        }
        if(Event.key = "y" || Event.key = "Y"){
            this.spacing = 2;
        }
        if(Event.key = "u" || Event.key = "U"){
            this.spacing = 3;
        }
        if(Event.key = "i" || Event.key = "I"){
            this.spacing = 4;
        }
        if(Event.key = "o" || Event.key = "O"){
            this.spacing = 5;
        }
        if(Event.key = "p" || Event.key = "P"){
            this.spacing = 6;
        }
    } if(Event.keyCode = 13){

    } if()
}
}
 document.addEventListener("keypress", changeFont);
 document.addEventListener("keypress",  changeSpacing);
