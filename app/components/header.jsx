import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'

const Header = () => {
  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to='/'>
                <img className="logo" src={logo} alt="Logo" />
            </Link>
        </div>
        <nav className="navegacion ">
            <Link to='/'>
                Home</Link>
            <Link to='/about'>
                About</Link>
            <Link to='/store'>
            Store</Link>
            <Link to='/blog'>
            Blog</Link>
        </nav>
    </header>  
    )
}

export default Header