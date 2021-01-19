//Module Pattern 
//son modulos para separar nuestro codigo. 

//este se llama un ifi
const module = (function () {
    //de esta manera se protegen las variables. 
    const nombre = 'Juan';

    function hola() {
        console.log('hola');
    }

    return{
        nombre,
        hola 
    }
})();

//donde queiro qeu se va a ejecutar o mostara pongo
module.hola();