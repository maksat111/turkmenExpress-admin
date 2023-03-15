import React from 'react';
import { Avatar } from 'antd';
import logo from '../images/logo3.png';
import './Navbar.css';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar() {
    return (
        <div className='navbar-container'>
            <img src={logo} alt='turkmenExpress' />
            <div className='navbar-items'>
                <div className='navbar-user-item'>
                    <Avatar icon={<AiOutlineUser />} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;