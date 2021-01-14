const paises = ['España', 'Inglaterra', 'Peru', 'Colombia', 'Mexico'];

function CrearPais(pais, callback) { 
    setTimeout(() =>{
        paises.push(pais);
        callback();
    }, 1000);
}

function mostrarPais() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 1000);
}

mostrarPais();

CrearPais('Ecuador', mostrarPais);