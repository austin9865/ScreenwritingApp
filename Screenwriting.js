class Screenplay {
    constructor() {
        this.document = new Document();
        window.addEventListener("keydown", (event) => {
            this.processKeyDown(event);
        });
//        window.addEventListener("keyup", (event) => {
//            this.shortcuts(event);
//        });
    }

    processKeyDown(event) {
        // You have to change this next line of code if you want to always be editing the last line of the last scene..etc.
        let currentLine = this.document.getCurrentAct().getCurrentScene().getCurrentLine();

        if (event.keyCode == 8) {
            let str = currentLine.written;
            let strRmv = str.substring(0, str.length - 1);
            currentLine.written = strRmv;
        } else if (event.keyCode == 13) {
            this.document.getCurrentAct().getCurrentScene().addLine();

        } else {
            currentLine.written += event.key;
        }

        this.document.renderDocument();
    }

//    shortCuts(KeyboardEvent) {
//        if (KeyboardEvent.shiftKey) {
//            if (event.key = "q") {
//                this.doc.style.fontSize = this.font + 1 + "px";
//            }
//            if (event.key = "b") {
//                this.doc.style.fontWeight = "bold";
//            }
//            if (event.key = "i") {
//                this.doc.style.fontStyle = "italic";
//            }
//            if (event.key = "r") {
//                this.doc.style.fonstyle = "";
//                this.doc.style.fontWeight = "";
//            }
//            if (event.key = "t") {
//                this.spacing = 1 + 1;
//            }
//            if (event.key = "a") {
//                this.doc.style.textTransform = "capitalize";
//            }
//            if (this.font >= 5) {
//                this.font = 1 + "px"
//            }
//        }
//    }
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
        for (let i = 0; i < this.scenes.length; i++) {
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
        for (let i = 0; i < this.lines.length; i++) {
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
