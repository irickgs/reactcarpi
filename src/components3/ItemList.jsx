import Item from "./Item";
const ItemList = ({productos}) => {
  return (
            <div>
                {productos.length > 0 && 
                    productos.map((producto) => (
                        <div>
                            <Item key={producto.id} producto={producto}/>
                        </div>
                    ))                 
                
                }
            </div>

  );
}
export default ItemList;
