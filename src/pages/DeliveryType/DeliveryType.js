import { React, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Checkbox } from 'antd';
import { axiosInstance } from '../../config/axios';
import TableComponent from '../../components/TableComponent';

function DeliveryType() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

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

    useEffect(() => {
        axiosInstance.get('delivery-type/list').then(res => {
            res.data?.forEach(element => {
                element.key = element.id
            });
            setDataSource(res?.data);
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
            title: 'Delivery name',
            dataIndex: 'name_ru',
            key: 'name_ru',
        },
        {
            title: 'Delivery days',
            dataIndex: 'delivery_days',
            key: 'delivery_days',
        },
        {
            title: 'Delivery amount',
            dataIndex: 'delivery_amount',
            key: 'delivery_amount',
        },
        {
            title: 'Delete',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <Checkbox checked={record.active} />
            ),
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
                    Изменить
                </div>
            ),
        },
    ];

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
                <h2>Delivery type</h2>
                <TableComponent dataSource={dataSource} columns={columns} />
            </div>
        </>
    );
}

export default DeliveryType;