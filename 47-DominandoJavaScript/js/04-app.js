//Creacion de los Implicit Binding 
//esto ahce referencia al this. 

const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        //el implicit Binding es el this. 
        console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }, 
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion() {
            console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`) 
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();
