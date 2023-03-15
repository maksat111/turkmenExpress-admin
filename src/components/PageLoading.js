import React from 'react';
import { BarLoader, BeatLoader } from 'react-spinners';
import Logo from '../images/logo.png';
import './PageLoading.css';

function PageLoading() {
    return (
        <div className='pageLoading-container'>
            <img src={Logo} alt='Turkmen Express' />
            <BeatLoader
                color={'red'}
                loading={true}
                width={'400px'}
            />
        </div>
    );
}

export default PageLoading;