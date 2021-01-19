//Creacion de funciones con argumentos. 
const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

//fn = function
const sumarOMultiplicar = fn => fn(10, 20);

console.log(sumarOMultiplicar( suma ));
console.log(sumarOMultiplicar( multiplicar ));