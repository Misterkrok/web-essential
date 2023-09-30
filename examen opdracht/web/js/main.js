/*
zie 6examen-javascript.jpg
##### 
1) Log de namen van de personages naar de console, vorafgegaan door een teller
##### 
Output:
  Personage 1 is Jeffrey Lebowski
  Personage 2 is Walter Sobchak
  Personage 3 is Donny Kerabatsos
 */
console.log('personage 1 is jeffrey lebowski' );
console.log('personage 2 is walter sobnak');
console.log('personage 3 is Donny kerebatos');
let personages = document.getElementsByClassName('person-titel');

/* 
###### 
2) Likes teller 
##### 
In het filmoverzicht zit de laatste lijn: 1000 personen vinden deze film leuk.

Voeg met javascript een button-element toe met daarop de tekst 'Like'.
Resultaat in HTML : <button>Like</button>

Telkens je op die knop krijgt wordt de teller (aanvankelijk 1000) met 1 verhoogd.
Gebruik daarvoor een eventListener

*/
let button = document.getElementById('button');

button.addEventListener('click', function(){
  button++
})

