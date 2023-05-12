const NavBar = () => {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="#">Destacados</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Varones</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Mujeres</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Niños</a>
            </li>
        </ul>
    )
}

export default NavBar;