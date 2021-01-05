const cliente = {
    nombre: 'Jose',
    saldo: 500
}

console.log(cliente);

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Jose', 1000);
console.log(juan);