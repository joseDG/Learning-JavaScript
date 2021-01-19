//Creacion de los Closures. 
//provienen del scope. 

const cliente = 'Juan';

function mostrarCliente() {
    const cliente = 'Pablo';

    console.log(cliente);
}

console.log(cliente);

mostrarCliente();

//Ejemplo closures
const obtenerCliente = () => {
    const nombre = "Juan";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();
cliente();