//crear Mixin
//solo funcionan con clases. 
//crear fuciones a una clase despues de ser creada. 

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

//aqui empieza aplciarse el patron de dise;o. 
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`)
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


const cliente = new Persona('Juan', 'correo@correo.com');



console.log(cliente);
cliente.mostrarInformacion()
cliente.mostrarNombre()


const cliente2 = new Cliente('Cliente', 'cliente@cliente.com');
console.log(cliente2);
cliente2.mostrarInformacion()
cliente2.mostrarNombre()