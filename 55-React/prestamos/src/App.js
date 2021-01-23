import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

//Algo Importante: El componente principal envia datos mediante props
//para poder vizualizar en el componente hijo este caso es Header
function App() {
   //Definir el state
   const [cantidad, guardarCantidad] = useState(0);
   const [plazo, guardarPlazo] = useState('');
   const [total, guardarTotal] = useState(0);
   const [cargando, guardarCargando] = useState(false);

   //Va a verificar par mostrar el resultado total
   //Tambien se conoce como la carga de componentes
   let componente;

   if(cargando){
     componente = <Spinner />
   }else if(total === 0){
    componente = <Mensaje />
   }else{
    componente = <Resultado
                    total={total} 
                    plazo={plazo} 
                    cantidad={cantidad} 
                />
   }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos" 
        descripcion="Utiliza el formulario para una cotizacion"
      />
      
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
          {/*Se le llama como carga de componentes*/}
          {componente}
        </div>

      </div>
    </Fragment>
  );
}

export default App;
