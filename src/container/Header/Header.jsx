import React from 'react';
import './Header.scss';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/Logo';

function Header() {
  return (
    <header>
      <div className="header__inner">
        <div className="header__inner__logo">
          <Logo/>
        </div>
        <div className="header__inner__nav">
          <Navbar/>
        </div>
      </div>
    </header>
    
  )
}

export default Header