import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../config/axios';
import InfoCard from './components/InfoCard';
import { FaUser } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits, MdDoNotTouch } from 'react-icons/md';
import './Dashboard.css';

function Dashboard(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const a = [];
        axiosInstance.get('dashboard/users/count').then(async res => {
            a.push({
                title: 'Пользователи',
                count: res.data.answer,
                icon: <FaUser color='white' />,
            });
            const product = await axiosInstance.get('dashboard/products/all/count');
            a.push({
                title: 'Все товары',
                count: product.data.answer,
                icon: <MdOutlineProductionQuantityLimits color='white' />,
            });
            const approved = await axiosInstance.get('dashboard/products/approved/count');
            a.push({
                title: 'Проверенные товары',
                count: approved.data.answer,
                icon: <BsFillCheckCircleFill color='white' />,
                prasent: Math.floor(approved.data.answer * 100 / product.data.answer)
            });
            const notapproved = await axiosInstance.get('dashboard/products/not-approved/count');
            a.push({
                title: 'Не проверенный товары',
                count: notapproved.data.answer,
                icon: <MdDoNotTouch color='white' />,
                prasent: Math.floor(notapproved.data.answer * 100 / product.data.answer)
            });
            setData(a);
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className='page dashboard-page-container'>
            <h2 className='main-title'>Добро пожаловать в панель администратора!</h2>
            <div className='statistics-card-container'>
                {data.map(item => <InfoCard title={item.title} number={item.count} icon={item.icon} prasent={item.prasent} />)}
            </div>
        </div>
    );
}

export default Dashboard;