const Carrousel = () => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleControls" class="carousel slide bg-light p-3" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <p>Hasta 4 cuotas sin interés</p>
                                <p><a href="#"></a>Ver métodos de pago</p>
                            </div>
                            <div className="carousel-item">
                                <p>Entregas a todo el país</p>
                                <p><a href="#"></a>Ver informacipon sobre envíos</p>
                            </div>
                            <div className="carousel-item">
                                <p>Mundo Adidas.com.pe</p>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
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
    )
}

export default Carrousel;