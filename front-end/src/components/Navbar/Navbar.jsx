import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className={`navbar ${isNavActive ? 'active' : ''}`}>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>FAVORA</p>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      <ul className={`nav-menu ${isNavActive ? 'active' : ''}`}>
        <li onClick={() => { setMenu("shop"); toggleMenu(); }}>
          <Link style={{ textDecoration: "none" }} to='/'>SHOP</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("mens"); toggleMenu(); }}>
          <Link style={{ textDecoration: "none" }} to='/mens'>MEN</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens"); toggleMenu(); }}>
          <Link style={{ textDecoration: "none" }} to='/womens'>WOMEN</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids"); toggleMenu(); }}>
          <Link style={{ textDecoration: "none" }} to='/kids'>KIDS</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
        {/* Add Login and Cart to the dropdown */}
        <li onClick={toggleMenu}>
          <Link to='/login'><button>Login</button></Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
          <div className='nav-cart-count'>0</div>
        </li>
      </ul>

     
    </div>
  );
}

export default Navbar;
