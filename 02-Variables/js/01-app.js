//Las variables sonuna caracteriticas de cualqueri lenguaje de programacion
//Existen 3 formas de crear variables en JavaScript, en nuevas versiones solo se utilzian 2: 

//Creacion de Variables con var
var producto = 'Monitor 23 Pulgadas'; //Inicicaliza la variable con un valor.

//Las variables tambein se peuden reasignar 
producto = 'Monitor de 90 pulgadas';

console.log(producto);

//JavaScript es un lenguaje de tipo dinamico,
//No se especifican tipos de datos cuando se crean la variable 
var precio = 200;
console.log(precio);

//También se peude inicializar una variable sin valor y asignarlo despues. 
var disponibles;
disponibles = true;

//Tambien se peuden inicializar multiples variables
var categoria = 'Computadoras',
    marca = 'HP',
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

//Reglas de las variables: 

//Pueden tener: letras, numeros
//Pero nunca pueden incicializar con numeros. 

var 99dias;
var dias99;

var _01;
var 01_;

//Estilos para nombrar variables con mas de una palabra
//más de una palabra. 

var nombreProducto = 'Monitor 30 pulgadas'; //CamelCase 
var nombre_producto = 'Monitor 90 pulgadas'; //underscode
var NombreProducto = 'Monitor 30 pulagdas'; //pascal case 
var nombreproducto = 'monitor 30 pulagads'; 