let doc = document.getElementById("document");
class Screenplay {
    constructor() {
        this.document = new Document();
        window.addEventListener("keydown", (event) => {
            this.processKeyDown(event);
        });
//                window.addEventListener("keyup", (event) => {
//                    this.shortCuts(event);
//                });
    }

    processKeyDown(event) {
        let currentLine = this.document.getCurrentAct().getCurrentScene().getCurrentLine();
        if (event.keyCode == 8) {
            let str = currentLine.written;
            let strRmv = str.substring(0, str.length - 1);
            currentLine.written = strRmv;
        } else if (event.keyCode == 13) {
            this.document.getCurrentAct().getCurrentScene().addLine();

        } else if (event.keyCode == 33) {
            this.document.addAct();

        } else if (event.keyCode == 34) {
            this.document.getCurrentAct().addScene();
        } else {
            currentLine.written += event.key;
        }
            this.document.renderDocument();
    }
        shortCuts(KeyboardEvent) {
            if (KeyboardEvent.shiftKey) {
                if (event.keyCode = 81) {
                    this.font = this.font + 1;
                    this.doc.style.fontSize = this.font;
                }
                if (event.keyCode = 86) {
                    this.doc.style.fontWeight = "bold";
                }
                if (event.keyCode = 73) {
                    this.doc.style.fontStyle = "italic";
                }
                if (event.keyCode = 82) {
                    this.doc.style.fonstyle = "normal";
                    this.doc.style.fontWeight = "normal";
                }
                if (event.keyCode = 84) {
                    this.spacing = this.spacing + 1;
                }
                if (event.keyCode = 65) {
                    this.doc.style.textTransform = "capitalize";
                }
                if (this.font >= 45) {
                    this.font = 16 + "px"
                }
                if (this.spacing >= 25) {
                    this.spacing = 1;
                }
            }
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
        for (let i = 0; i < this.acts.length; i++) {
             while(this.acts[i].lastElementChild()){
                this.acts[i].removeChild(this.acts[i].lastElementChildChild());
            }
            console.log(this.acts[i].render());
            doc.appendChild(this.acts[i].render());
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
        for (let i = 0; i < this.scenes.length; i++) {
            if(this.scenes[i].lastChild()){
                this.scenes[i].removeChild();
            }
            act.textContent = "ACT:"
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
        for (let i = 0; i < this.lines.length; i++) {
             if(this.lines[i].lastChild()){
                this.lines[i].removeChild();
            }
            scene.textContent = "Scene:";
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
    }

}

let screenplay = new Screenplay();
