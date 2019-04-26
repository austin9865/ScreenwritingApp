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
//}
//window.addEventListener("keydown", shortcuts);
//
//class Command {
//    constructor(){
//        this.font = 1;
//        this.spacing = 1;
//    }
//
//    function shortcuts(){
//    if (KeyboardEvent.ctrlKey){
//      if(Event.key = "q" || Event,key = "Q"){
//          this.font = 1;
//      }
//      if(Event.key = "w" || Event.key = "W"){
//          this.font = 2;
//      }
//      if(Event.key = "e" || Event.key = "E"){
//          this.font = 3;
//      }
//      if(Event.key = "r" || Event.key = "R"){
//          this.font = 4;
//      }
//        if(Event.key = "t" || Event.key = "T"){
//            this.spacing = 1;
//        }
//        if(Event.key = "y" || Event.key = "Y"){
//            this.spacing = 2;
//        }
//        if(Event.key = "u" || Event.key = "U"){
//            this.spacing = 3;
//        }
//        if(Event.key = "i" || Event.key = "I"){
//            this.spacing = 4;
//        }
//        if(Event.key = "o" || Event.key = "O"){
//            this.spacing = 5;
//        }
//        if(Event.key = "p" || Event.key = "P"){
//            this.spacing = 6;
//        }
//    } else if(Event.keyCode = 13){
//        this.lines = new Line();
//    }
//}
//}


let screenplay = new Screenplay();
