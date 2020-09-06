//DOM
//1
// dinamiskai sukurti 2 input laukus
var vardas = document.createElement("INPUT");
vardas.setAttribute("type", "text");
vardas.setAttribute("value", "Vardas");
document.body.appendChild(vardas);

var pavarde = document.createElement("INPUT");
pavarde.setAttribute("type", "text");
pavarde.setAttribute("value", "Pavardė");
document.body.appendChild(pavarde);

//mygtukas
var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("Įvesti");         // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);                    // Append <button> to <body>

btn.onmouseover = function() {mouseOver()};
btn.onmouseout = function() {mouseOut()};

function mouseOver() {
    btn.style.height = "64px";
}

function mouseOut() {
    btn.style.width = "64px";
}

var btn2 = document.createElement("BUTTON");        
var t2 = document.createTextNode("Grįžti");       
btn2.appendChild(t2);                                

var textnode = document.createTextNode("");
var textnode2 = document.createTextNode("");

btn.onclick = function(){
    textnode.nodeValue="Vardas: "+vardas.value+" ";
    textnode2.nodeValue="Pavardė: "+pavarde.value;
    document.body.replaceChild(textnode, vardas);
    document.body.replaceChild(textnode2, pavarde);
    document.body.replaceChild(btn2, btn);
}

btn2.onclick = function(){
    document.body.replaceChild(vardas, textnode);
    document.body.replaceChild(pavarde, textnode2);
    document.body.replaceChild(btn, btn2);
}


//2
//padidinti mygtuka kai uzvedama pele
//i konsole ivestu lauku reiksmes

//3
//paspaudus mygtuka vietoj ivestu lauku atsiranda tekstas
//mygtukas ivesti i gristi pasikeicia
//paspaudus mygtukas jis vel tampa ivesti

