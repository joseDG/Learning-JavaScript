// Patron Singleton 
//Caracteristicas: no permite hacer instancias de una clase
//para no crear multiples instancias es decir solo ahcer un solo objeto.
//No va permitir crear dos objetos desde la misma clase.

let instancia = null;

class Persona {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia;
        }
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Karen', 'karen@karen.com');
console.log(persona2);
