
let b = document.getElementById('btn1');
let div = document.getElementById('container');

b.addEventListener('click', function () {
  let p = document.createElement('p');
  p.textContent = "Yes! Het werkt";
  div.appendChild(p);

});


    // of
    // Je schrijft een aparte functie die je dan aanroept bij 
    // het click event
    // b.addEventListener('click', addParagraph);

    //     function addParagraph() {

    //   let p1 = document.createElement('p');
    //   p1.textContent = "Yes! Het werkt";
    //   div.appendChild(p1);

    // }