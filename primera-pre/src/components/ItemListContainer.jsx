import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
//import productos from "./json/productos.json";
import Itemlist from "./ItemList";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
//import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

// acceder a los productos desde json
/*    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos)
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        })
    }, [id]); */

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
            console.error("Error! No se encontraon productos en la selección!");
        }
    });
}, [id]); 

//Proceso de importación

/*useEffect = (() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    productos.forEach(producto => {
        addDoc(itemsCollection, producto);
    });

    console.log("Productos cargados en Firestore!");

},[]); */


    return (
    <div className="container my-5">
        <div className="row">
            {loading ? <Loading /> : <Itemlist productos ={items} />}
            {/*<div class="col-md-4">
                <img src={items.imagen} alt={items.nombre} className="img-fluid" />
            </div>
            <div class="col-md-4">
                <h2>{items.nombre}</h2>
                <p>${items.precio}</p>
            </div>*/}
        </div>
    </div>
    )
}

export default ItemListContainer;