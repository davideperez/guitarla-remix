import { Link, useLocation } from "@remix-run/react"

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
    )
}

export default Navbar