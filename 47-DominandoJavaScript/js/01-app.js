//Que es el Scope: es el alcance de una variable
//existe dos tipode scope un bloque o una funcion o bloque de codigo.

//esto se lo conoce como un scope Global
/*
const cliente = 'Juan';

function mostrarCliente(){
    console.log(cliente);
}

mostrarCliente();
*/


const login = true;
const cliente = 'Juan';

function clienteLogueado() {
    
}

function funcion2() {
    console.log(cliente);
}

funcion2();
clienteLogueado();

function mostrarCliente(){
    //esto se lo conoce como un scope interno. 
    const cliente = 'Juan';
    console.log(cliente);
}

mostrarCliente();