import { Link, useLocation } from "@remix-run/react"
import logo from '../../public/img/logo.svg'

const Header = () => {

    const location = useLocation()


  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to='/'>
                <img className="logo" src={logo} alt="Logo" />
            </Link>
            <nav className="navegacion ">
                <Link 
                    to='/'
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    Home</Link>
                <Link 
                    to='/about'
                    className={location.pathname === '/about' ? 'active' : ''}
                >
                    About</Link>
                <Link 
                    to='/store'
                    className={location.pathname === '/store' ? 'active' : ''}
                >
                Store</Link>
                <Link 
                    to='/blog'
                    className={location.pathname === '/blog' ? 'active' : ''}
                >
                Blog</Link>
            </nav>
        </div>
    </header>  
    )
}

export default Header