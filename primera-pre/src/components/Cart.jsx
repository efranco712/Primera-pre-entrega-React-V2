import { useContext } from "react";
import { CartContext} from "./context/CartContext";
import { Link} from "react-router-dom";
import trash from "./images/trash.svg";


const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="aler alert-danger" role="alert"> No se encontraron productos en el Carrito</div>
                    </div>
                </div>
            </div>
        )
    }  

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos selececcionados</h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td className="text-end"><button className="bttn btn-light" onClick={() => {clear()}}
                                        title="Vaciar Carrito">Vaciar Carrito</button></td>
                                <td>&nbsp;</td>
                            </tr>
                                {
                                    cart.map(item => 
                                        <tr>
                                            <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                            <td className="align-middle">{item.titulo}</td>
                                            <td className="align-middle">{item.cantidad} x ${item.precio * item.precio}</td>
                                            <td className="align-middle text-center">{item.cantidad * item.precio}</td>
                                            <td className="align-middle text-end"><button className="bttn btn-light" onClick={() => {removeItem(item.id)}}
                                            title="Eliminar producto"><img src={trash} alt="Eliminr Producto" width={24} />
                                            </button></td>
                                        </tr> 
                                    )
                                }
                            <tr>
                                <td colSpan={3} className="align-middle text-end">Total a pagar</td>
                                <td className="align-middle text-center">${sumTotal()}</td>
                                <td className="align-middle text-end"><Link to={"/checkout"} className="btn btn-light">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div cl></div>
            <h1>Cart</h1>
            <p>Total Producto : {cartTotal()}</p>
        </div>
    )
}

export default Cart;