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
        this.keucommands = new Command
        this.keyinput = new Key

    }

document.addEventListener("keypress", changeFont);
 document.addEventListener("keypress",  changeSpacing);


}

document.addEventListener("keypress", inputKey);
class Key {
    constructor(){
this.letters ="";
    }
    inputKey(){
        let tempData = this.letters;
        if( event.keyCode >= 48 && event.keyCode <= 90 && !(Event.KeyCode >= 58 && event.KeyCode <= 64)){

        }
    }
}

document.addEventListener("keypress", changeFont);
document.addEventListener("keypress",  changeSpacing);

class Command {
    constructor(){
        this.font = 1;
        this.spacing = 1;
    }

    function changeFont(){
    if (KeyboardEvent.ctrlKey){
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

function changeSpacing(){
    if (keycommands.ctrlKey){
        if(event.key = "a" || event.key = "A"){
            this.spacing = 2;
        }
        if(event.key = "c" || event.key = "C"){
            this.spacing = 3;
        }
        if(event.key = "d" || event.key = "D"){
            this.spacing = 4;
        }
        if(event.key = "p" || event.key = "P"){
            this.spacing = 5;
        }
        if(event.key = "s" || event.key = "S"){
            this.spacing = 6;
        }
    }
}
}
<<<<<<< HEAD

document.addEventListener("keypress", inputKey);
class Key {
    constructor(){
this.letters ="";
    }
    inputKey(){
        let tempData = this.letters;
        if( Event.keyCode >= 48 && Event.keyCode <= 90 && !(Event.KeyCode >= 58 && Event.KeyCode <= 64)){
            tempData.push(Event.Key);
        } else {

        }
    }
}
=======
>>>>>>> origin/master
