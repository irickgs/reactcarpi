import { useState, useEffect } from "react";

const Texto2 = () => {
    const [text, setText] = useState("");
    
    const handleText = (e) => {
        console.log(e);
        setText(e.target.value);
    }

    useEffect(() => {
        console.log("Componente montado");
        return () => {
            console.log("Componente desmontado");
        }  
    }, []);
    
    useEffect(() => {
        console.log("Componente actualizado");
        
    }, [text]);


    return (
    <div>
        <input type="text" onChange={handleText} />
      <p>¡Hola, este es un texto que se puede ocultar o mostrar!{text}</p>
    </div>
  );
}       
export default Texto2;
