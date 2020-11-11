// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

//Añadir un elemento al carrito
const producto = {
    nombre: 'Monitor de 50 pulagdas',
    precio: 500
}

const producto2 = {
    nombre: 'Celular',
    precio: 400
}

//Aqui los agregamos al inicio del carrito
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 20
}

carrito.push(producto3);

//me inserta un elemento al incio del arreglo 
carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.log(carrito);