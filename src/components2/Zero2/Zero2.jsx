import { useState, useEffect } from "react";

const Zero2 = ( {dire} ) => {
  const [valor, setValor] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(dire)
        .then((response) => response.json())
        .then((data) => {
          // Cambiado 'valor' a 'data' para evitar confusión con el estado
          setValor(data); // Asumo que el JSON tiene una propiedad 'valor'
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    };

    fetchData(); // Llama a la función una vez al montar el componente

    const intervalId = setInterval(fetchData, 1000); // Actualiza cada 1000ms (1 segundo)

    // Limpia el intervalo cuando el componente se desmonte para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Valor: {valor}</h1>
    </div>
  );
};
export default Zero2;


