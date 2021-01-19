/* Categorias de patrones 
1. De creacion- Permiten crear objetos y permiten la reutilizacion del codigo. 
2. Estructura- Explicacion como deben comunicarse los obejtos y clases en grandes proyectos. 
3. Comportamiento- Se encargan de como se comportan y comunicacion los objetos. 
*/

//Class Pattern -> pertenece ala categoria de creacion. 
//es el mas utilizado. 

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);