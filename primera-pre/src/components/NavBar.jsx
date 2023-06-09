import { NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <ul className="nav justify-content-center align-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassName="text-danger" to={"/destacados"}>Destacados</NavLink>
            </li>
            <li className="nav-item">
                <NavLink class="nav-link text-dark" activeclassName="text-danger" to={"/category/hombre"}>Hombres</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassName="text-danger" to={"category/mujer"}>Mujer</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassName="text-danger" to={"category/niños"}>Niños</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;