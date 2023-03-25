import React, { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import { message, Modal } from 'antd'
import './Subcategories.css';

function Subcategories() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [paginateLoading, setPaginateLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(2);
    const [total, setTotal] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);


    useEffect(() => {
        axiosInstance.get('subcategories/list').then((res) => {
            let a = [];
            setTotal(res.data.count)
            res.data.results?.map(item => {
                a.push({
                    key: item.id,
                    id: item.id,
                    name_ru: item.name_ru,
                    name_tk: item.name_tk,
                    name_en: item.name_en,
                    category: item.category.name_ru,
                    image: item.image
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
            title: 'Категория',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'Image',
            key: 'active',
            render: (_, record) => (
                <img className='subcategory-image' src={record.image} alt='image' />
            ),
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
        setConfirmLoading(true);
        try {
            const data = await axiosInstance.delete(`subcategories/delete/${selectedItem.id}/`)
            setConfirmLoading(false);
        } catch (err) {
            setConfirmLoading(false);
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!');
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handlePagitanation = async () => {
        setPaginateLoading(true);
        const data = await axiosInstance.get(`subcategories/list/?page=${currentPage}`);
        data.data.next ? setCurrentPage(currentPage + 1) : setCurrentPage(null);
        let a = [];
        data.data.results?.forEach(item => {
            a.push({
                key: item.id,
                id: item.id,
                name_ru: item.name_ru,
                name_tk: item.name_tk,
                name_en: item.name_en,
                category: item.category.name_ru,
                image: item.image
            })
        });
        setDataSource([...dataSource, ...a]);
        setPaginateLoading(false);
    }

    //-------------------------------------------------------pagination -----------------------------------------//
    const onPaginationChange = async (page) => {
        let a = [];
        const res = await axiosInstance.get(`subcategories/list?page=${page}`);
        res.data.results?.forEach(item => {
            a.push({
                key: item.id,
                id: item.id,
                name_ru: item.name_ru,
                name_tk: item.name_tk,
                name_en: item.name_en,
                category: item.category.name_ru,
                image: item.image
            })
        });
        setDataSource(a);
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
                <h2>Города и этрапы</h2>
                <TableComponent columns={columns} dataSource={dataSource} pagination={{ onChange: onPaginationChange, total: total, pageSize: 20 }} />
                {/* {currentPage && (<div className='pagination-button' onClick={handlePagitanation}>{paginateLoading ? <AiOutlineLoading className='loading-spin' /> : 'Продолжать'}</div>)} */}
            </div>
        </>
    );
}

export default Subcategories;