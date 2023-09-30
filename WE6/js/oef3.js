let b = document.getElementById('btn1');
let container = document.getElementById('container');

b.addEventListener('click', function(){
    console.log('OK')
    let p1 = document.createElement('p');
    p1.textContent = "jep. het werkt ";
    container.appendChild(p1);
})