import {useEffect , useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./context/CartContext";
//import { QueryEndAtConstraint } from "firebase/firestore";

const ItemDetail = ({producto}) => {
    const {addItem} = useContext (CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect (() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offet md-1">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-md-3">
                    <h1>{producto.titulo}</h1>
                    <h3>{producto.descripcion}</h3>
                    <p><b>${producto.precio}</b></p>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;