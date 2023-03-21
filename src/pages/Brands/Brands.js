import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import { Modal, message } from 'antd'
import './Brands.css';

function Brands() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(2);


    useEffect(() => {
        axiosInstance.get('brands/list').then((res) => {
            let a = [];
            res.data.results?.forEach(item => {
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
                <div className='delete-icon' onClick={() => showModal(record)}>
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

    const showModal = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            await axiosInstance.delete(`brands/delete/${selectedItem.id}`);
            const newDataSource = dataSource.filter(element => element.id !== selectedItem.id);
            setDataSource(newDataSource);
            message.success('Успешно удалено')
            setOpen(false);
            setConfirmLoading(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!')
            console.log(err)
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handlePagitanation = async () => {
        const data = await axiosInstance.get(`brands/list/?page=${currentPage}`);
        data.data.next ? setCurrentPage(currentPage + 1) : setCurrentPage(null);
        let a = [];
        data.data.results?.forEach(item => {
            a.push({
                key: item.id,
                id: item.id,
                name: item.name,
                logo: item.logo,
                category: item.category ? item.category.name_ru : 'null'
            })
        });
        setDataSource([...dataSource, ...a]);
    }

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
                <h2>Brands</h2>
                <TableComponent columns={columns} dataSource={dataSource} />
                {currentPage && <div className='pagination-button' onClick={handlePagitanation}>Продолжать</div>}
            </div>
        </>
    );
}

export default Brands;