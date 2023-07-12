import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import Itemlist from "./ItemList";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


//acceder a los productos desde firestore

useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(q).then(resultado => {
        console.log(resultado);
        if (resultado.size > 0) {           
        setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        setLoading(false);
        } else {
            console.error("Error! No se encontraron productos en la selección!");
        }
    });
}, [id]); 

    return (
    <div className="container my-5">
        <div className="row">
            {loading ? <Loading /> : <Itemlist productos ={items} />}
        </div>
    </div>
    )
}

export default ItemListContainer;