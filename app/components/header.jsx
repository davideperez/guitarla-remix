import { Link } from "@remix-run/react"

const Header = () => {
  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo"></div>
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