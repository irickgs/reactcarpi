import React, { useState } from 'react';
import Texto2 from '../Texto2/Texto2';

const Texto = () => {
  
    console.log("Hola mundo");
    const [mostrar, setMostrar] = useState(true);
  
    const toggleMostrar = () => {
        setMostrar(!mostrar);
    };

    return (
    <div>


      <button onClick={toggleMostrar}> {
      mostrar ? "Ocultar" : "Mostrar"}</button>
      
    

    {mostrar && <Texto2/>}
      
    </div>
  );
}   
export default Texto;

