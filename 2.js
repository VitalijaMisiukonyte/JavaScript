/* function funkcija(callBack){
    if (typeof callBack == "function"){
        callBack();
    }
}
funkcija(function() {
    console.log("Labas");
}) */

/* var arr=["pradžia",20, 123, 1, "pabaiga", 5];
function sort(a,b){
    if ((a || b) == "pradžia"){
        return false;
    } if ((a || b) == "pabaiga"){
        return true;
    } else {
        return a-b;
    }
}
console.log(arr.sort(sort));
*/

function Shape(type, round) {
    this.type = type;
    this.round = round;
}
Shape.prototype.canRoll = function(){
    return (this.round == true) ? "Gali ristis." : "Negali ristis.";
}

var apskritimas = new Shape("apskritimas", true);
console.log(apskritimas.canRoll());
var trikampis = new Shape("trikampis", false);
console.log(trikampis.canRoll());
var sesiakampis = new Shape("šešiakampis", false);
console.log(sesiakampis.canRoll());

