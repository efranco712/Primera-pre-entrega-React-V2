const Itemlist = ({productos}) => {
    
    return (
        <>
            {productos.map(producto => <Item  key={producto.idx} producto={producto} /> )}
        </>
    )
}

export default Itemlist;