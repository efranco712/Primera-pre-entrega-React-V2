import bag from "./images/bag.svg";

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-light position-relative">
            <img src={bag} alt="Carrito" width={24} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;