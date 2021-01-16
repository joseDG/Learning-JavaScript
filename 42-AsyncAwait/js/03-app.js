//Async await en express y declaraticon.

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
//con exprexion 
const  ejecutar = async () => {
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