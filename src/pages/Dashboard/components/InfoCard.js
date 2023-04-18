import React from 'react';
import CountUp from 'react-countup';
import { Statistic } from 'antd';
import '../Dashboard.css';
const formatter = (value) => <CountUp end={value} separator="," />;

function InfoCard({ title, number, icon, prasent }) {
    return (
        <div className='info-container'>
            <div className='info-icon-container'>{icon}</div>
            <div className='info'>
                <p className='info-name'>{title}</p>
                {/* <p className='info-number'>22332</p> */}
                <div className='statistics-number'>
                    <Statistic value={number} formatter={formatter} />
                    {prasent && <p>/</p>}
                    {prasent && <Statistic value={prasent} formatter={formatter} suffix="%" />}
                </div>
            </div>
        </div>
    );
}

export default InfoCard;