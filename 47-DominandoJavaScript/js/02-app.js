//Creacion del Hoisting
//El Hoisting se funciona primero se declaran las funciones.
//segundo se ejecutan las funciones. 

obtenerCliente('Juan');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}