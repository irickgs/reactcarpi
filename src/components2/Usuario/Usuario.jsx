const Usuario = ( {nombre, edad, nacionalidad} ) => {
  return (
    <div className="Usuario">
        <h1>{nombre}</h1>
        <h1>{edad}</h1>
        <h1>{nacionalidad}</h1>
        <hr />
      
      
    </div> 
  );
}

export default Usuario;