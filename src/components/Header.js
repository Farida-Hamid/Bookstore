import React from 'react';
import { Link } from 'react-router-dom';
import login from './img/login.png';

const Header = () => (
  <header className="font1">
    <div className="container">
      <h1>Library</h1>
      <nav>
        <Link className="light" to="/">BOOKS</Link>
        <Link className="light gray" to="/categories">CATEGORIES</Link>
      </nav>
    </div>
    <img src={login} alt="Logo" />
  </header>
);

export default Header;
