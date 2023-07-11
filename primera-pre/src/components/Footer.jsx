import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-black bg -dark py-5">
            <div className="row">
                <div className="col-md-2">
                    <h6>Buscar Tienda</h6>
                </div>
                <div className="col-md-2">
                    <h6>Ayuda</h6>
                </div>
                <div className="col-md-2">
                    <h6>Acerca de Adidas</h6>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-4 text-end">
                    <Link to={"https://www.facebook.com/adidasPE/?brand_redir=182162001806727&locale=es_LA"} className="text-light me-1"><img src={facebook} alt={"Facebook"} width={20} /></Link>
                    <Link to={"https://www.youtube.com/user/adidas"} className="text-light me-1"><img src={youtube} alt={"Youtube"} width={20} /></Link>
                    <Link to={"https://twitter.com/adidas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"} className="text-light me-1"><img src={twitter} alt={"Twitter"} width={20} /></Link>
                    <Link to={"https://www.instagram.com/adidaspe/?hl=es-la"} className="text-light me-1"><img src={instagram} alt={"Instagram"} width={20} /></Link>
                </div>
            </div>       
        </div>
    )
}

export default Footer;