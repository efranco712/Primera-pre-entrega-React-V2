import { useState} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const[items,setItems] =useState(1);
    const[itemStock,setItemStock] =useState(stock);
    const[itemAdded, setItemAdded] = useState(false);
    
    const incremetarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > itemStock) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items)
            console.log("Has seleccionado:"  + items + " Productos al carrito!/Te quedam: " + itemStock + "productos disponibles!");
        }
    }

    useEffect(() => {
        setItemStock(stock);

    }, [stock]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-grupo" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-ligh" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light"></button>
                        <button type="button" className="btn btn-light"onClick={incremetarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                {itemAdded ? <Link to={"/cart"} className="btn btn-light">Finalizar Compra </Link> : <button type="button" className="btn btn-light" onClick={()=> onAdd(items)}>Agregar al carrito</button>}
                </div>
            </div>
        </div>    
        
    )
}

export default ItemCount;