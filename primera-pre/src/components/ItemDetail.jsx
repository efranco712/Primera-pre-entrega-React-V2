import { useEffect,useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./context/CartContext";
//import { QueryEndAtConstraint } from "firebase/firestore";

const ItemDetail = ({producto}) => {
    const {addItem} = useContext (CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

  //corrección coder ask
    useEffect (() => {
            setItem(producto);
        }, [producto]); 


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offet-md-1">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-3">
                    <h1>{item.nombre}</h1>
                    <h3>{item.descripcion}</h3>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;