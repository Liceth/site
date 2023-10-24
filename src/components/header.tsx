import React from 'react';
import '../scss/header.scss';

const Header = () => {

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">Who am I</a></li>
          <li className="nav-item"><a href="/contact">Let's get in touch</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
