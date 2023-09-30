// Oefeningen

// 1)
alert("Hello World");


// 2)
let a = 10;
a+=5;
console.log("a is " + a);

// 3)
function berekenOppCirkel(s) {
  return s * s * Math.PI;
}

// extra)
function berekenOppDriehoek(b,h) {
  return b * h / 2;
}

function berekenOppRechthoek(z1,z2) {
  return z1*z2;
}

let opp1 = berekenOppCirkel(2.2);
let opp2 = berekenOppDriehoek(4,2);
let opp3 = berekenOppRechthoek(4,2);


console.log("opp1 is " + opp1);
console.log("opp2 is " + opp2);
console.log("opp3 is " + opp3);



// 6)
let som = 0;
for (let i=1; i<=30; i++) {
   som += i;
}

// let som2 = 0;
// let j = 0;
// while (j <=30) {
//   som2 += j;
//   j++;
// }

  console.log("de som is " + som);
