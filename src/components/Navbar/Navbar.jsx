import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar__navbar">
      <span className='navbar__navbar__link'>showreel</span>
      <div className="navbar__navbar__menu">
        <span className="navbar__navbar__menu__link">menu</span>
        <div className="navbar__navbar__menu__link__hamberger">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar