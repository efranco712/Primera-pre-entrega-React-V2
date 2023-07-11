import {Link} from "react-router-dom";

const Item = ({producto}) => {

    return (
        <>
            <div className="col-me-4 my-3">
                <div className="card border border-0">
                    <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                    <img src={producto.imagen} class="card-img-top" alt={producto.titulos} />
                    <div className="card-body">
                        <h3>{producto.titulo}</h3>
                        <p className="card-text"><span className="text-secondary"></span>{producto.descripcion}${producto.precio}</p>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item;