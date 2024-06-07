import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <nav className="Navbar">
      <ul className="Navlist">
        <li className="Navitem" onClick={() => console.log('Navigating to Home')}><Link to="/">Home</Link></li>
        <li className="Navitem" onClick={() => console.log('Navigating to Reservation')}><Link to="/reservation">Reservation</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
