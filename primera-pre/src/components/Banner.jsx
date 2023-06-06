const Banner = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col text-center">
                    <img src={"./images/banner.svg"} alt="banner" className="img-fluid" />
                    <h2 className="my-3">PREPARATE PARA EL INVIERNO</h2>
                    <a href="/" className="btn btn-dark">Comprar</a>

                </div>
            </div>
        </div>
    )
}

export default Banner;