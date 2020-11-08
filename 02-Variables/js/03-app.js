// Veamos el 3er tipo de formas de crear variables, cosnt 
// Existen pocas diferencias entre let y cosnt , asi que vamos a verlas. 

//Primero una varaible con const su valor no puede ser re-asignado> 

const producto = 'Monitor de 30 pulgadas';
console.log(producto);
//aqui me va a mostrar un error y dice qeu un vaor ocsntante no se peude modificar o ser re-asignado.
producto = 'Monitor de 19 pulgadas';

//Por otro lado, las variables con cosnt, deben iniciarse con un valor: 
const precio;
//es aqui donde se aplcia el erro proque las variables const simepre se declaran. 
precio = 20;
console.log(precio);

//Existen otras diferencias entre cosnt y let especialmente cuando se trabajan con arrelos y objetos
//que te mostrare mas adelante, pero recuerda, las variables con cosnt , no se peuden re-asignar
//y tampoco puede iniciar sin un valor. 