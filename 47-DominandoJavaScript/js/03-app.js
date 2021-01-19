//Creacion de la Coercion. 
//es la conversion automatica o implicita al igual que otros. 

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); //Implicita. 

console.log(Number(numero2)); //Explicito. 

console.log(numero1.toString());

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));