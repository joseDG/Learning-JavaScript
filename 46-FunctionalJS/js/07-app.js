//Funciones que retornan otra funcion. 

const obtenerCliente = () => () => console.log('Juan Pablo');

const fn = obtenerCliente();

fn();