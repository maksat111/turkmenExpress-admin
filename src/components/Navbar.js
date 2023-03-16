import React, { useState } from 'react';
import { Modal } from 'antd';
import logo from '../images/logo3.png';
import './Navbar.css';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const navigate = useNavigate();

    const userStyle = { fontSize: '24px' };
    const logoutStyle = { transform: 'rotate(180deg)' };

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            navigate('/')
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal
                title="Siz hakatdanam cykmakcymy?"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                style={{
                    top: '200px'
                }}
            />

            <div className='navbar-container'>
                <img src={logo} alt='turkmenExpress' />
                <div className='navbar-items'>
                    <div className='navbar-user-item'>
                        <AiOutlineUser style={userStyle} />
                        <p>Maksat Akmyradow</p>
                    </div>
                    <div className='navbar-logout' onClick={showModal}>
                        <FiLogOut style={logoutStyle} />
                    Выйти
                </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;