import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import { FaUser } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits, MdDoNotTouch } from 'react-icons/md';
import date from 'date-and-time';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { axiosInstance } from '../../config/axios';
import TableComponent from '../../components/TableComponent';
import InfoCard from './components/InfoCard';
import './Dashboard.css';
const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);

function Dashboard(props) {
    const dateFormat = 'YYYY-MM-DD';
    const [data, setData] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [first_date, setFirst_date] = useState(null);
    const [second_date, setSecond_date] = useState(null);

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

    useEffect(() => {
        const formData = new FormData();
        formData.append('first_date', '2023-04-04');
        formData.append('second_date', '2023-04-11');
        const data = axiosInstance.get('dashboard/products/by-user', formData).then(res => {
            data.data.answer.forEach((element, index) => {
                element.id = index;
                element.key = index;
            });
            setDataSource(data.data.answer);
        }).catch(err => console.log(err));
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

    const handleDateChange = (e) => {
        const first = date.format(e[0].$d, 'YYYY-MM-DD');
        const second = date.format(e[1].$d, 'YYYY-MM-DD');
        setFirst_date(first);
        setFirst_date(second);
        console.log(first, second)
    }

    return (
        <div className='page dashboard-page-container'>
            <h2 className='main-title'>Добро пожаловать в панель администратора!</h2>
            <div className='statistics-card-container'>
                {data.map((item, index) => <InfoCard title={item.title} number={item.count} icon={item.icon} prasent={item.prasent} key={index} />)}
            </div>
            <div className='dashboard-table-title'>
                <h2>Таблица товаров по добавление</h2>
                {/* <RangePicker value={[first_date && dayjs(first_date, dateFormat), second_date && dayjs(second_date, dateFormat)]} placeholder={['Дата начала', 'Дата окончания']} onChange={handleDateChange} /> */}
                <RangePicker placeholder={['Дата начала', 'Дата окончания']} onChange={handleDateChange} />
            </div>
            <TableComponent dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    );
}

export default Dashboard;