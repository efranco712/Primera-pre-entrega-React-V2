import Logoadidas from "./images/logo-adidas.svg";
import Adidas from "./images/Adidas.svg";
import CartWidget from './CartWidget';
import NavBar from './NavBar';
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <Link to={"destacados"} target={"_blank"} rel={"noreferrer"}> <img src={Logoadidas} alt={"Logo adidas"} width={50} /></Link>
                </div>
            </div>
            <div className="col-md-6 text-end">
                <Link to={"/"}className="text-dark text-decoration-none">Buscar Tienda</Link> | <Link to={"#"} className="text-dark text-decoration-none">Ayuda</Link>
            </div>
            <div className="row bg-body-secondary p3">
                <div className="col-md-4">
                    <Link to={"destacados"}><img src={Adidas} alt={"Adidas antiguo"} width={65}/></Link>
                </div>
                <div className="col-md-4 text-center">
                    <NavBar/>
                </div>
                <div className="col-md-4 text-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default Header;
