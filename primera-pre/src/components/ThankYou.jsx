import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ThankYou = () => {
    const{orderId} = useParams();
    return (
        <div className="container my-5">
            <div className="row text-center align-middle">
                <div className="alert alert-light p-5" role="alert">
                    <h1 className="fs-1 text">Grcias por tu Compra!</h1>
                    <p>Tu orden de Compra es: <b>{orderId}</b></p>
                    <p><Link to={"/"} className="btn btn-light mt-3">Volver al Home</Link></p>
                </div>

            </div>
        </div>
    )
}

export default ThankYou;