//Constructor Pattern
//Es como tener un clase principal y en base a ella se van a crear mas clases heredades. 
//Se los en otros lenguajes de programacion conoce como clases abstractas. 
//las clases abstractas no se instancia solo se crean directamente. 

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);

const cliente = new Cliente('Miguel', 'cliente@cliente.com', 'Codigo Con Juan');
console.log(cliente);