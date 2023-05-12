import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg -dark py-5">
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
                    <a href="#" className="text-light me-1"><img src={facebook} alt={"Facebook"} width={20} /></a>
                    <a href="#" className="text-light me-1"><img src={youtube} alt={"Youtube"} width={20} /></a>
                    <a href="#" className="text-light me-1"><img src={twitter} alt={"Twitter"} width={20} /></a>
                    <a href="#" className="text-light me-1"><img src={instagram} alt={"Instagram"} width={20} /></a>
                </div>
            </div>       
        </div>
    )
}

export default Footer;