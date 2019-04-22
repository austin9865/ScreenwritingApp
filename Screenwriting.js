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
        this.keyInput = new Key;

    }

document.addEventListener("keypress", changeFont);
 document.addEventListener("keypress",  changeSpacing);


}


class Key {
    constructor(){
    this.letters = "";
    }
<<<<<<< HEAD
document.addEventListener("keypress", inputKey);
=======
    inputKey(){
        let tempData = this.letters;
        if( event.keyCode >= 48 && event.keyCode <= 90 && !(Event.KeyCode >= 58 && event.KeyCode <= 64)){
                tempData.push(Event.Key);
        } else {
>>>>>>> Origin/master

    function inputKey(){
        this.letters += event.key;
        console.log(this.letters);
    }
}

document.addEventListener("keypress", changeFont);
document.addEventListener("keypress",  changeSpacing);

class Command {
    constructor(){
        this.font = 1;
        this.spacing = 1;
    }

    function shortcuts(){
    if (KeyboardEvent.ctrlKey){
<<<<<<< HEAD
      if(Event.key = "b" || event.key = "B"){
=======
      if(event.key = "q" || event,key = "Q"){
          this.font = 1;
      }
      if(event.key = "w" || event.key = "W"){
>>>>>>> Origin/master
          this.font = 2;
      }
      if(event.key = "e" || event.key = "E"){
          this.font = 3;
      }
      if(event.key = "r" || event.key = "R"){
          this.font = 4;
      }
        if(Event.key = "t" || Event.key = "T"){
            this.spacing = 1;
        }
        if(event.key = "y" || event.key = "Y"){
            this.spacing = 2;
        }
        if(event.key = "u" || event.key = "U"){
            this.spacing = 3;
        }
        if(event.key = "i" || event.key = "I"){
            this.spacing = 4;
        }
        if(event.key = "o" || event.key = "O"){
            this.spacing = 5;
        }
        if(event.key = "p" || event.key = "P"){
            this.spacing = 6;
        }
    } else if(KeyBoardEvent.EnterKey){

    }
}
}

