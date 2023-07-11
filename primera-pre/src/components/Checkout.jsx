import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Navigate} from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [cart, clear, sumTotal] = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, phone: telefono, email: email }
        const items = cart.map(item => ({ Id: item.id, title: item.title, price: item.price, quantity:item.quantity}));
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}- ${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}}`;
        const total = sumTotal();
        const order = { buyer: buyer, items: items, date: date, total: total };

        //insertar un Documento en Firestore

    const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        })
        .catch(resultado => {
            console.log("Error! No se pudo completar la compra! ");
        }); 

    }



    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary">Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table table-bordered">
                        <tbody>
                            {
                                cart.map(item =>
                                    <tr>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td className="align-middle">{item.titulo}</td>
                                        <td className="align-middle">{item.quantity} x ${item.precio * item.precio}</td>
                                        <td className="align-middle text-center">{item.quantity * item.precio}</td>
                                    </tr>
                                )
                            }
                            <tr>
                                <td colSpan={3} className="align-middle text-end">Total a pagar</td>
                                <td className="align-middle text-center">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/thankyou" + orderId} /> : ""}

                </div>
            </div>
        </div>    
            )
}

            export default Checkout;