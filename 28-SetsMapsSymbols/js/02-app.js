// WeakSet | Se lo conoce como el set debil
// aqui solo se le puede agregar objetos 

var ws = new WeakSet();
const cliente = {
    nombre: 'Juan',
    saldo: 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}
const nombre = 'Pedro';

//agregando
ws.add(cliente); 
ws.add(cliente2);
// ws.add(nombre); // Solo se pueden agregar objetos

//comprueba si existe el valor
console.log( ws.has(cliente) ); 
console.log( ws.has(cliente2));  
// console.log( ws.has(nombre));  

// console.log( ws.delete(window)); 
console.log( ws.delete(cliente));
console.log( ws.has(cliente) ); 


// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.

