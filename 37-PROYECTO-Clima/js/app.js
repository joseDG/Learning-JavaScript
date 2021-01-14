const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

/*Es similar a DOMcontentLoader*/
/*Carga la pagina al iniciar */
window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})



function buscarClima(e) {
    e.preventDefault();
 
    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');
        //este return detiene la ejecucion.
        return;
    }
    // Consultariamos la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    //esta parte se valida para que no se repita mas la alerta. 
    if(!alerta) {
        // Crear una alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center' );

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);

        // Se elimine la alerta después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarAPI(ciudad, pais) {

    //key de la api. 
    const appId = 'd4ded8a5e600be7f7b4755f520cdbd89';

    //la parte que se pasa para ahcer la consulta en l api. 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;


    Spinner(); // Muestra un Spinner de carga

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( datos => {

            console.log(datos);

            limpiarHTML(); // Limpiar el HTML previo

            //se valida si la ciudad existe o no. 
            if(datos.cod === "404") {
                mostrarError('Ciudad no encontrada')
                return;
            }

            // Imprime la respuesta en el HTML
            mostrarClima(datos);
        })

}


function mostrarClima(datos) {
    //se aplica un destructuring dentro de otro objeto. 
    //el name se ahce destructuring para saber el nombre que se esta utilizando.
    const { name, main: { temp, temp_max, temp_min } } = datos;

    //aqui les pasan las temperaturas. 
    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    //Mostarar el nombre en la ciusdad que se esta buscando. 
    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;
    tempMaxima.classList.add('text-xl');

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451;`;
    tempMinima.classList.add('text-xl');

    //parte qeu me muestra las letras en color blanco. 
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);

}

//converison de jkelvin a centigrados. 
const kelvinACentigrados = grados => parseInt(grados - 273.15);


function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Creacion de la duncion del snipper. 
function Spinner() {

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
}