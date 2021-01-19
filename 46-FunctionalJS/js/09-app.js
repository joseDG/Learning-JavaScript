//Creacion de Partials y Currying 

//se trato en divir una funcion en partes. 

const suma = (a,b,c) => a + b + c;

const parcial = a => b => c => suma(a,b,c);

const resultadoParcial = parcial(5)(4)(3);

console.log(resultadoParcial);