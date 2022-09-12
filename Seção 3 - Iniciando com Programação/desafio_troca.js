let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7

console.log("a = " + a);
console.log("b = " + b);

let temp = a;
a = b;
b = temp;

console.log("Troca...");
console.log("a = " + a);
console.log("b = " + b);

//Outra forma de trocar
a = 7;
b = 94;

[a, b] = [b, a]

console.log("Outra troca...");
console.log("a = " + a);
console.log("b = " + b);



