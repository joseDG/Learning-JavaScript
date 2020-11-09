//Veamos algunos métodos existen en los strings o cadenas de Texto 

const producto = "Monitor 20 Pulgadas ";
const precio = '30 USD';

 // Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y es más que nada porque no es un método como tal sino una propiedad.
console.log(producto.length);

//IndexOF
// Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf("Pulgadas"));
// -1 Significa que no lo pudo encontrar
console.log(producto.indexOf("Tablet"));

//Includes 
// Conocer si un texto existe y me como resultado un boolean = true
console.log(producto.includes('Monitor'));
// Conocer si un texto existe
console.log(producto.includes('monitor'));