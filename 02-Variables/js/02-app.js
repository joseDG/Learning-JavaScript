//Var era la forma de crear variables en versiones anteriores de ECMACScript hoy en dia las opciones se reducen a 2
//Las reglas son básicamente las mismas si no que con let 

let producto = 'Monitor de 30 pulgadas'; //Inicializa una variable con el valor.

//las variables se peuden reasignar
producto = 'Monitor de 19 pulgadas';

//Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes adignarle un tipo de dato totalmente diferente. 
producto = 20;
producto = true;
producto = null;

console.log(producto);

//JavaScript es un lenguaje de tipo dinamico
//No se especifican tipos de datos cuando 
//se crea una variable.

let precio = 200;
console.log(precio);

//Tambien se peuden inicializar una variable sion valor y asignarlo despues. 
let disponibles;
disponibles = true;

//Iniciar multiples variables
let categoria = 'computadoras',
    marca = 'HP',
    calificacion = 5;

console.log(categoria);

// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero
let 99dias;
let dias99;

let _01;
let 01_;

// Estilos para nombrar variables con más de una palabra

// más de una palabra.
let  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
let nombre_producto = 'Monitor 30 Pulgadas'; //underscore
let NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
let nombreproducto = 'Monitor 30 Pulgadas';