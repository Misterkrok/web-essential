
console.log("Het lukt");


/* OEFENING 2*/
//  'Login first' boodschap



// koppel een click-event aan de download link

let download = document.getElementById('download');
download.addEventListener('click', function() {
  download.textContent = "Login First";
  download.style.color = "#ffffff";
  download.style.fontWeight = "bold";
})


//console.log(download);


// Haal de download-link op en stop deze in een variabele 


// koppel daar het klik-event aan.
// verander de tekst in 'Login first' na de klik
// (daarna blijft deze tekst altijd staan, je hoeft geen script te schrijven om dit weer weg te doen)
// de tekst wordt vet en krijgt een witte kleur. Dit mag rechstreeks in javascript gefinieerd worden.



/* OEFENING 3*/
//  Header met navigatie verdwijnt bij naar beneden scrollen 
// en verschijnt weer na omhoog scrollen


let header = document.getElementById('header');
let startPos = window.scrollY;

window.addEventListener('scroll', function(){
  let curPos = window.scrollY;
  //console.log(startPos, curPos);
  if (curPos > startPos) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
 startPos = curPos;
})

/*

Voeg zodra er gescrolled wordt een klasse 'hidden' toe aan de navigatie
Verwijder deze klasse zodra er omhoog gescolled wordt.
Definieer de hidden klasse in je CSS en geef ze display:hidden

window.pageYoffset 

geeft het aantal pixels terug dat het document op een bepaald moment gescrolled is in verticale richting

*/






