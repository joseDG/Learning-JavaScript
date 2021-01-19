const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Testing al carrito de compras', ()  => {
    //primera prueba:comprobar que no tenga mas elementos.
    test('Probar que el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });
    //segunda prueba: el carrito verifica que noe ste vacio 
    //adicional alas pruebas realzian con los call backs 
    test('Verificar que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);
    })

});