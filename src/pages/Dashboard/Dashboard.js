import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import { axiosInstance } from '../../config/axios';
import TableComponent from '../../components/TableComponent';
import InfoCard from './components/InfoCard';
import { FaUser } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits, MdDoNotTouch } from 'react-icons/md';
import './Dashboard.css';
const { RangePicker } = DatePicker;

function Dashboard(props) {
    const [data, setData] = useState([]);
    const [dataSource, setDataSource] = useState([]);

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
            const data = await axiosInstance.get('dashboard/products/by-user/');
            data.data.answer.forEach((element, index) => {
                element.id = index;
                element.key = index;
            });
            setDataSource(data.data.answer)
        }).catch(err => console.log(err))
    }, [])

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: '65px',
            style: { alignItems: "center" }
        },
        {
            title: 'Имя',
            dataIndex: 'user__name',
            key: 'user__name',
        },
        {
            title: 'Фамилия',
            dataIndex: 'user__surname',
            key: 'user__surname',
        },
        {
            title: 'Добавлены товары',
            dataIndex: 'total',
            key: 'total',
        },
    ];

    return (
        <div className='page dashboard-page-container'>
            <h2 className='main-title'>Добро пожаловать в панель администратора!</h2>
            <div className='statistics-card-container'>
                {data.map((item, index) => <InfoCard title={item.title} number={item.count} icon={item.icon} prasent={item.prasent} key={index} />)}
            </div>
            <div className='dashboard-table-title'>
                <h2>Products table</h2>
                <RangePicker placeholder={['Дата начала', 'Дата окончания']} onChange={(e) => console.log(e)} />
            </div>
            <TableComponent dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    );
}

export default Dashboard;