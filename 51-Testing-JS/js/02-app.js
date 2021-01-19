// Probar 2 valores

function suma(a, b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(1, 2); 
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar(10, 5);
esperado = 5;

//aqui se llama la funcion de expected. 
expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);

//la funcion de expected es como el nombre de la funcion que verifica. 
function expected( esperado ) {
    return {
        //donde empieza la verificacion del codigo. 
        toBe(resultado) {
            if(resultado !== esperado) {
                console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
            } else {
                console.log('La prueba paso correctamente');
            }
        }, 
        //verifica qeu ambos son iguales. 
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.error(`El ${resultado} no es igual a lo esperado, la prueba no paso`);
            } else {
                console.log('La prueba paso correctamente');
            }
        }
    }
}