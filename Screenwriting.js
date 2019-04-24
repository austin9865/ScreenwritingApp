let doc = document.getElementById("document");

class Screenplay {
    constructor(){
        this.document= new Document();
    }
}

class Document {
    constructor(){
        this.text = new Line();
    }
}
class Act{

}
class Scene{

}
class Line {
    constructor(){
        this.written = " ";
        //this.keyCommands = new Command;
        //this.keyInput = new Key;
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
            console.log(strRmv);
            this.written = strRmv
            doc.textContent = this.written;
        }
    }

    inputKey(event){
        this.written += event.key;
        doc.textContent = this.written;
    }


}

//class Key {
//    constructor(){
//    this.letters = "";
//    }
//
//document.addEventListener("keypress", inputKey);
//
//    function inputKey(){
//        this.letters += event.key;
//        console.log(this.letters);
//    }
//}
//
//document.addEventListener("keypress", changeFont);
//document.addEventListener("keypress",  changeSpacing);
//
//class Command {
//    constructor(){
//        this.font = 1;
//        this.spacing = 1;
//    }
//
//    function shortcuts(){
//    if (KeyboardEvent.ctrlKey){
//      if(event.key = "q" || event,key = "Q"){
//          this.font = 1;
//      }
//      if(event.key = "w" || event.key = "W"){
//          this.font = 2;
//      }
//      if(event.key = "e" || event.key = "E"){
//          this.font = 3;
//      }
//      if(event.key = "r" || event.key = "R"){
//          this.font = 4;
//      }
//        if(Event.key = "t" || Event.key = "T"){
//            this.spacing = 1;
//        }
//        if(event.key = "y" || event.key = "Y"){
//            this.spacing = 2;
//        }
//        if(event.key = "u" || event.key = "U"){
//            this.spacing = 3;
//        }
//        if(event.key = "i" || event.key = "I"){
//            this.spacing = 4;
//        }
//        if(event.key = "o" || event.key = "O"){
//            this.spacing = 5;
//        }
//        if(event.key = "p" || event.key = "P"){
//            this.spacing = 6;
//        }
//    } else if(KeyBoardEvent.EnterKey){
//
//    }
//}
//}


let screenplay = new Screenplay();
