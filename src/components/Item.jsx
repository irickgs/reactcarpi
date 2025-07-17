import React from 'react'

function Item ({ producto }) {
  return (
    <div>
      <h1>{producto.id}</h1>
      <h2>{producto.title}</h2>
      <p>{producto.price}</p>
      <img src={producto.image} alt={producto.title} />
    </div>
  );
}

export default Item