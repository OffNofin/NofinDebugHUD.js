// Created by: Nofin | https://www.nofin.fr/
// Released under cc0 public domain license :)

var debugLines = document.getElementsByClassName("debug_line");
var debugOverlay = document.getElementsByClassName("debug")[0];
var showEmptyLines = true;

checkOverlay();

function checkOverlay(){
    if(debugOverlay == null){
        let cnsl = document.createElement("div");
        cnsl.classList.add("debug");
        document.body.appendChild(cnsl);
        debugOverlay = document.getElementsByClassName("debug")[0];
    }
}

function printString(string, lineIndex, clr){
    if ((lineIndex + 1) > debugOverlay.children.length){
        for (let i = debugOverlay.children.length; i < lineIndex + 1;){
            let line = document.createElement("p");
            line.classList.add("debug_line");
            debugLines = document.getElementsByClassName("debug_line");
            debugOverlay.appendChild(line);
            if(i == lineIndex){
                if(i < 10){
                    line.innerHTML = "0" + i + " : " + ("<span style='color: " + clr + "'>") + string + ("</span>");
                }
                else{
                    line.innerHTML = i + " : " + ("<span style='color: " + clr + "'>") + string + ("</span>");
                }
            }
            else if(showEmptyLines){
                if(i < 10){
                    line.innerHTML = "0" + i + " : ";
                }
                else{
                    line.innerHTML = i + " : ";
                }
            }
            i++;
        }
    }
    else{
        if(lineIndex < 10){
            debugLines[lineIndex].innerHTML = "0" + lineIndex + " : " + ("<span style='color: " + clr + "'>") + string + ("</span>");
        }
        else{
            debugLines[lineIndex].innerHTML = lineIndex + " : " + ("<span style='color: " + clr + "'>") + string + ("</span>");
        }
    }
}