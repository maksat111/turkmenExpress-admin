import React, { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { HiPencilAlt } from 'react-icons/hi';
import { Checkbox } from 'antd';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import './Banners.css';
import { getToken } from '../../utils/getToken';

function Banners(props) {
    const [bannersData, setBannersData] = useState([]);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        axiosInstance.get('banners/list').then(res => {
            setBannersData(res.data);
            const a = [];
            res?.data.forEach(item => {
                a.push({
                    key: item.id,
                    id: item.id,
                    image: item.image,
                    active: item.active
                })
            });
            setDataSource(a);
        }).catch(err => console.log(err));
    }, []);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: '50px',
            style: { alignItems: "center" }
        },
        {
            title: 'Banner image',
            dataIndex: 'image',
            key: 'image',
            render: (_, record) => (
                <img className='banner-image' src={record.image} alt='banner' />
            ),
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <Checkbox name='late' disabled checked={record.active} />
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='delete-icon'>
                    <TiDelete />
                </div>
            ),
        },
        {
            title: 'Update',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <HiPencilAlt />
            ),
        },
    ];

    getToken()

    return (
        <div className='banners-container page'>
            <h2>Banners</h2>
            <TableComponent dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default Banners;