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
            //this.document.getCurrentAct().getCurrentScene().getCurrentLine();

        } else if (event.keyCode == 33) {
            this.document.addAct();
            this.document.getCurrentAct.render();

        } else if (event.keyCode == 34) {
            this.document.getCurrentAct().addScene();
            this.document.getCurrentAct().getCurrentScene().render();
        } else {
            currentLine.written += event.key;
            this.document.getCurrentAct().getCurrentScene().render();
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
        for (let i = 0; i < this.acts.length; i++) {
            console.log(this.acts[i].render())
            var thisAct = this.acts[i].render();
            this.doc.appendChild(thisAct);
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
            if (this.scenes.length > 0) {
                act.remove();
            }
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
            if (this.lines.length > 0) {
                scene.remove();
            }
            let line = document.createElement("div");
            line.textContent += this.lines[i].written;
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
    render() {

    }

}

let screenplay = new Screenplay();
