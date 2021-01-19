const cliente = {
    nombre: 'Juan Pablo',
    balance: 500
};

describe('Testing al Cliente', () => {
    //primera prueba
    test('El cliente es premium', () => {
        //toBeGreater preuabn si es mayor de 400
        expect(cliente.balance).toBeGreaterThan(400);
    });
    //segunda prueba
    test('Es Juan Pablo', () => {
        //comprueba si es (toBe)
        expect(cliente.nombre).toBe('Juan Pablo');
    });
    //tervera prueba
    test('No es otro cliente', () => {
        //preuna que no es pedro (not.toBe) 
        expect(cliente.nombre).not.toBe('Pedro');
    });
    //cuarta prueba 
    test('No tiene 500', () => {
        //COMPRUEBNA QUE NO TENGA 500 (not.toBe)
        expect(cliente.balance).not.toBe(400);
    })
})