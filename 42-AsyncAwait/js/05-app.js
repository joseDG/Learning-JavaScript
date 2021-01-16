const url = 'https://picsum.photos/list';

//cunado el cdocuemnto este listo
document.addEventListener('DOMContentLoaded', obtenerDatos);

//esta funcion es con PROMISE
function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error));
}

//este es como Async Await y mas corto. 
async function obtenerDatos() {
    try {
        //\esta linea bloquea la siguiente linea
        const respuesta = await fetch(url);
        //despues que se acaba de ejecutar la 1 se ejecuta esta. 
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}