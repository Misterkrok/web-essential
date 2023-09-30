function bgColor(kleur) {
  //body is een buit in property
  //document.body.style.backgroundColor = kleur;
  let body = document.querySelector('body');
  body.style.backgroundColor = kleur;
}

// test it by calling the function
//bgColor('tomato');


if (btns.length >= 1) {
  for (let i = 0; i < btns.length; i++) {
    // les kleur uit value attribuut
    let kleur = btns[i].getAttribute('value');
    // geef de knop die kleur
    btns[i].style.backgroundColor = kleur;

    // koppel het klik event
    btns[i].addEventListener('click', function () {
      bgColor(kleur)
    })
  }
}
