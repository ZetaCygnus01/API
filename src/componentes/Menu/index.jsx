import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-menu">
          <Link to="/">Lista</Link>
          <Link to="/capturados">Capturados</Link>
          <Link to="/Aleatorios">Aleatorios</Link>
          <Link to="/Usuario">Usuario</Link>
          <Link to="/Favoritos">Favoritos</Link>
        </nav>
    )
  }
 
  export default Menu