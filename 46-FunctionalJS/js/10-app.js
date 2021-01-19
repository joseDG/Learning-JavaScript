//Creacion de un Composition . 
//se puede hacer en esto con clases tambioen puede reemplzar. 

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Empresa: ${info.puesto}`);
    }
})

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email, 
        empresa
    }

    //toma una funcion y la compia dentro del objeto. 
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email, 
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Código Con Juan');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('==========')

const empleado = Empleado('Pedro', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();