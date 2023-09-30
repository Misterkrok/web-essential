function wijzig1() {
    let pizza = document.getElementById('two');
    pizza.textContent = 'lasagne';
    pizza.style.border = '1px solid red';
}

function wijzig2(){
    let items = document.getElementsByClassName('hot');
    items[0].className = 'cold';
}

wijzig1();
wijzig2();