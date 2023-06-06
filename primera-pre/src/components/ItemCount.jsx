import { useEffect } from "react";

const ItemCount = () => {
    const[items,setItems] =useState(1);
    const[itemStock,setItemstcok] =useState(Stock);
    
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

    const onAdd = () => {
        if (items <= itemStock) {
            setItemsSotck(itemStock - items);
            setItems(1);
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
                <button type="button" class="btn btn-light" onClick={onAdd}>Agregar</button>
                </div>
            </div>
        </div>    
        
    )
}

export default ItemCount;