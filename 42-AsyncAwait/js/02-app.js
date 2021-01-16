//Primer ejemplo de Asyn Await
function descargarClientes(){

    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve ('El listado de CLeintes se descargo correctamente');
            }else{
                reject ('Error en la conexion');
            }
        }, 3000)
    })
}

//Async await
//Function Declaration 
async function ejecutar(){
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();

        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();