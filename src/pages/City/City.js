import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import { Modal } from 'antd'
import './City.css';

function City() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        axiosInstance.get('cities/list').then((res) => {
            let a = [];
            res.data?.map(item => {
                a.push({
                    key: item.id,
                    id: item.id,
                    name_ru: item.name_ru,
                    name_tk: item.name_tk,
                    name_en: item.name_en,
                    region: item.region?.name_ru
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
            title: 'Название(Рус)',
            dataIndex: 'name_ru',
            key: 'name_ru',
            width: '300px'
        },
        {
            title: 'Название(Туркмен)',
            dataIndex: 'name_tk',
            key: 'name_tk',
        },
        {
            title: 'Название(Анг)',
            dataIndex: 'name_en',
            key: 'name_en',
        },
        {
            title: 'Регион',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'Delete',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='delete-icon' onClick={showModal}>
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
                    {/* <TiDelete /> */}
                    Изменить
                </div>
            ),
        },
    ];

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal
                title="Вы уверены, что хотите удалить?"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                cancelText={'Отмена'}
                okText={'Да'}
                okType={'primary'}
                style={{
                    top: '200px'
                }}
            />
            <div className='page'>
                <h2>Города и этрапы</h2>
                <TableComponent columns={columns} dataSource={dataSource} />
            </div>
        </>
    );
}

export default City;