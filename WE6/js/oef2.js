let el = document.getElementById('two');
el.textContent = "lasagne";
el.className = "cold";
el.style.border = "5px solid lime";
el.classList.remove('cold');
el.classList.add('hot');
console.log(el);