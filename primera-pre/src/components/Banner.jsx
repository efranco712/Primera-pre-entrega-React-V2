import Logo from "./images/banner.png";
import Carrousel1 from "./images/2.jpg";
import Carrousel2 from "./images/2.webp";
import Carrousel3 from "./images/3.jpg";

const Banner = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col text-center">
                    
                    <img src={Logo} alt="banner" className="img-fluid" />
                    <h2 className="my-3 mt-5">PREPARATE PARA EL TORNEO</h2>
                    <a href="/" className="btn btn-dark mt-3 mb-5">Comprar</a>
                    <div className="carrousel">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={Carrousel1} alt="First slide"/>
                                </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Carrousel2} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Carrousel3} alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner;