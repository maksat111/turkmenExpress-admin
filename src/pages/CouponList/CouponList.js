import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import './CouponList.css';

function CouponList() {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        axiosInstance.get('brands/list').then((res) => {
            let a = [];
            res.data?.map(item => {
                a.push({
                    key: item.id,
                    id: item.id,
                    name: item.name,
                    logo: item.logo,
                    category: item.category ? item.category.name_ru : 'null'
                })
            });
            setDataSource(a);
        }).catch(err => console.log(err))
    }, [])

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: '50px',
        },
        {
            title: 'Brand name',
            dataIndex: 'name',
            key: 'name',
            width: '300px'
        },
        {
            title: 'Brand Logo',
            dataIndex: 'logo',
            key: 'logo',
            render: (_, record) => (
                <img className='brand-image' src={record.logo} alt='banner' />
            ),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Delete',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='delete-icon'>
                    Удалить
                </div>
            ),
        },
        {
            title: 'Update',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='update-icon'>
                    Изменить
                </div>
            ),
        },
    ];

    return (
        <div className='page'>
            <h2>Brands</h2>
            <TableComponent columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default CouponList;