import Logoadidas from "./images/logo-adidas.svg";
import Adidas from "./images/Adidas.svg";
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';



const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <a href="http://www.w3.org/1999/xlink"> <img src={Logoadidas} alt={"Logo adidas"} width={50} /></a>
                </div>
            </div>
            <div className="col-md-6 text-end">
                <a href="/"className="text-dark text-decoration-none">Buscar Tienda</a> | <a href="#" className="text-dark text-decoration-none">Ayuda</a>
            </div>
            <div className="row bg-body-secondary p3">
                <div className="col-md-4">
                    <a href="http://www.w3.org/2000/svg"><img src={Adidas} alt={"Adidas antiguo"} width={65}/></a>
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
