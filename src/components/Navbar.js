import React from 'react';
import './Navbar.css';
import logo from '../images/logo3.png';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='navbar-container'>
            <img src={logo} alt='turkmenExpress' />
        </div>
    );
}

export default Navbar;