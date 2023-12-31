/* OEFENING 1*/
// log een boodschap naar de console die toont dat het script geladen is
console.log("het lukt")


/* OEFENING 2*/
//  'Login first' boodschap

// Haal de header op en stop deze in een variabele 

// koppel een click-event aan de download link
let download = document.getElementById("download");
download.addEventListener('click',function(){
    download.textContent= "login first";
    download.style.color = "#ffffff";
    download.style.fontWeight = "bold";
})



// Haal de download-link op en stop deze in een variabele 


// koppel daar het klik-event aan.
// verander de tekst in 'Login first' na de klik
// (daarna blijft deze tekst altijd staan, je hoeft geen script te schrijven om dit weer weg te doen)
// de tekst wordt vet en krijgt een witte kleur. Dit mag rechstreeks in javascript gefinieerd worden.



/* OEFENING 3*/
//  Header met navigatie verdwijnt bij naar beneden scrollen 
// en verschijnt weer na omhoog scrollen

let header = document.getElementById('header');
let startpos = window.scrollY;

window.addEventListener('scroll', function(){
    let curpos = this.window.scrollY;

    if ( curpos > startpos){
        header.classList.add('hidden');
    }else  {
        header.classList.remove('hidden');
    }
    startpos = curpos;
})

/*
Nodige event: window.scroll (it is een event van het window-object ipv document)

Voeg zodra er gescrolled wordt een klasse 'hidden' toe aan de navigatie
Verwijder deze klasse zodra er omhoog gescolled wordt.
Definieer de hidden klasse in je CSS en geef ze display:hidden

window.pageYoffset 

geeft het aantal pixels terug dat het document op een bepaald moment gescrolled is in verticale richting

*/






