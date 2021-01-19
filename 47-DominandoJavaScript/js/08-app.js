//Self - se utiliza en los servive workers. 


self.onload = () => {
    console.log('Ventana Lista');
}

window.nombre = 'Monitor 20 Pulgadas';

const producto = {
    
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        //el self hace referencia asi como un this. 
        return `El Producto: ${self.nombre} `
    }
}

console.log(producto.mostrarInfo());