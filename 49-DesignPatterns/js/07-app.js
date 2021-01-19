//Patron Namespace
//ayuda crear todas las funciones dentro. 
//se le dice namespace proqeu en un objeto se le va in crando todos los objetos atributos. 
//se pueden tenre diferenctes name space para mushocs objetos
//hace qeu evite el choque en la llamdas de los objetos. 

//un objeto
const restaurantApp = {};

//se agrega lso platillos. 
restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

//se agregan funciones. 
restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro menú`);

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}

restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlatillo('Taco', 20);
//lo extrae para mostrar otro producto mas. 
const { platillos } = restaurantApp;
//se agreag el namespace. 
restaurantApp.funciones.mostrarMenu( platillos );