import { AiOutlineLoading } from 'react-icons/ai';
import React from 'react';
import './Loading.css';

function Loading({ size }) {
    return (
        <div className='loading_container'>
            <AiOutlineLoading style={{ fontSize: `${size}`, color: 'rgb(7, 7, 175)' }} />
        </div>
    );
}

export default Loading;