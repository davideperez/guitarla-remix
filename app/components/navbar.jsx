import { Link, useLocation } from "@remix-run/react"
import image from '../../public/img/cart.png'

const Navbar = () => {

    const location = useLocation()
    
  return (
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
            to='/guitars'
            className={location.pathname === '/guitars' ? 'active' : ''}
        >
        Store</Link>
        <Link 
            to='/blog'
            className={location.pathname === '/blog' ? 'active' : ''}
        >
        Blog</Link>
        <Link 
            to='/cart'
        >
            <img src={image} alt="cart" />
        </Link>
    </nav>
    )
}

export default Navbar