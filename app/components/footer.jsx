
import Navbar from "./navbar"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container content">
            <Navbar />
            <p className="copyright">All rights reserved { new Date().getFullYear() }.</p>
        </div>
    </footer>
  )
}

export default Footer