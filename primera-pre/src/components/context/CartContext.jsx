import { createContext,useState} from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => item.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad:quantity}])
        }

    };

    const removeItem =(id) => {
        const items = cart.filter(product => product .id !== id);
        setCart([...items]);

    };

    const clear = () => {
        setCart([]);

    };

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    };

    const cartTotal = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumTotal = () => {
        return cart.reduce((acum, item) => acum += item.cantidad * item.precio);
    }

    return (
        <CartContext.Provider value={{cart, cartTotal, sumTotal, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;