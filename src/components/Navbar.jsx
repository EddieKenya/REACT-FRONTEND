import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from "react";
import './navbar.css'


const Navbar = () => {
  const navRef = useRef()

  const ShowNavbar = () =>{
    navRef.current.classList.toggle('responsive_nav')
  }
  return ( 
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link>Home</Link>
        <Link>SignIn</Link>
        <Link>LogOut</Link>
        <Link>About Me</Link>
        <button  className="nav-btn nav-close-btn" onClick={ShowNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button   className="nav-btn"  onClick={ShowNavbar}>
        <MenuIcon/>
      </button>
    </header>
   );
}
 
export default Navbar;
