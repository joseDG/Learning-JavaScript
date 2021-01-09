// Wekmap
// mapas debiles se los conoce
//no se puede instanciar


const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log( weakmap.has(producto));
console.log( weakmap.get(producto));
console.log( weakmap.delete(producto));


console.log(weakmap);


/*

let key = {userId:1};
let key2 = {userId:2};
let weakmap = new WeakMap();

weakmap.set(key,"Alex");
weakmap.has(key); //true
weakmap.get(key); //Alex
weakmap.delete(key); // true
weakmap.get(key); //undefined

weakmap.set(key2,"Vicky");
weakmap.size; //undefined
key2=undefined;
weakmap.get(key2); //undefined*/