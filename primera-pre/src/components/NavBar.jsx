const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="#">Destacados</a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href="#">Varones</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Mujeres</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Niños</a>
            </li>
        </ul>
    )
}

export default NavBar;