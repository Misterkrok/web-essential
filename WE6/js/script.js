alert("hello world");
let a = 10;
let straal =2.2;
a += 5; 
let basis =5 , hoogte =7;

function  berekenoppervlakteCirkel(r) {
    let oppcirekel = r*r*Math.PI;
    return oppcirekel;
}
function berekenoppervlaktedriehoek(basis,hoogte) {
    let oppdriehoek = basis * hoogte /2;
    return oppdriehoek; 
}
function berekenoppervlakterechthoek(zijde1,sijde2) {
    let opprechthoek = zijde1 * sijde2;
    return opprechthoek;
}
console.log("a is " + a);
console.log(" de oppervlakte van de cirkel is " + berekenoppervlakteCirkel(5));
console.log(berekenoppervlaktedriehoek);
console.log(berekenoppervlakterechthoek);