// Explicit Binding...
//

function persona(el1, el2) {
    console.log(`Mi Nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}


const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

//se pasa cada elemnto y la posicion del arreglo
persona.call(informacion, musicaFavorita[0], musicaFavorita[1] );

//se pasa todo el arrelo en apply
persona.apply(informacion, musicaFavorita);

//es similar a call pero el bind crea una nueva funcion. 
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();