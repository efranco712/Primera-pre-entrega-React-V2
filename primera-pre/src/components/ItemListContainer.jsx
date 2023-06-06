import { useState } from "react";
import ItemCount from "./ItemCount";
import productos from "./json/productos.json";
import Itemlist from "./ItemList";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        })
    }, []);

    return (
    <div className="container my-5">
        <div className="row">
            <Itemlist productos ={items} />
            <ItemCount stock={100}/>
        </div>
    </div>
    )
}

export default ItemListContainer;