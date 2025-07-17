

//crear componente de react que consulto un valor por fetch y lo muestre por pantalla. 

import { useState, useEffect } from "react";    

const Cero = () => {
    const [valor, setValor] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://192.168.86.36:1880/temp") // Reemplaza con tu URL de API
            .then(response => response.json())
            .then(valor => {
                setValor(valor); // Asegúrate de que 'data.valor' sea el campo correcto
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h1>Valor: {valor}</h1>
        </div>
    );
}
export default Cero;

