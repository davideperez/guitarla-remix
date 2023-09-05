import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'

import Navbar from "./navbar"

const Header = () => {


  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to='/'>
                <img className="logo" src={logo} alt="Logo" />
            </Link>
            <Navbar />
        </div>
    </header>  
    )
}

export default Header