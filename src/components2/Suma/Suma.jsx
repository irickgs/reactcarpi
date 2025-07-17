import { useState } from "react";


const Suma = () => { 
    const [valor, setvalor] = useState(0);
    
    const incrementar = () => {
        setvalor(valor + 1);
    };
    
    const decrementar = () => {
        setvalor(valor - 1);
    };

    
     const resetear = () => {
         setvalor(0);
     };

    return (
        <div >
            <h1>{valor}</h1>
            <button onClick={ () => incrementar()}>Incrementar</button>
            <button onClick={ () => decrementar()}>Decrementar</button>
        </div>
    );
}

export default Suma;
