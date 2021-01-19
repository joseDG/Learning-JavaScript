//Creacion separar lso datos delas funciones. 

const carrito = [
    { nombre: 'Monitor de 20 Pulgadas', precio: 500},
    { nombre: 'Televisor de 20 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const mayor400 = producto => {
    return producto.precio > 400;
}

//higt older function = filter 
const resultado = carrito.filter( mayor400 );
console.log(carrito);
console.log(resultado);

