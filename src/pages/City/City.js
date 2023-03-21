import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import { Modal, message } from 'antd'
import './City.css';
import { AiOutlineLoading } from 'react-icons/ai';

function City() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(2);
    const [selectedItem, setSelectedItem] = useState(null);
    const [paginateLoading, setPaginateLoading] = useState(false);

    useEffect(() => {
        axiosInstance.get('cities/list').then((res) => {
            let a = [];
            res.data.results?.forEach(item => {
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
    }, []);

    const handlePagitanation = async () => {
        setPaginateLoading(true);
        const data = await axiosInstance.get(`cities/list/?page=${currentPage}`);
        data.data.next ? setCurrentPage(currentPage + 1) : setCurrentPage(null);
        let a = [];
        data.data.results?.forEach(item => {
            a.push({
                key: item.id,
                id: item.id,
                name_ru: item.name_ru,
                name_tk: item.name_tk,
                name_en: item.name_en,
                region: item.region?.name_ru
            })
        });
        setDataSource([...dataSource, ...a]);
        setPaginateLoading(false);
    }

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            await axiosInstance.delete(`cities/delete/${selectedItem.id}`);
            const newDataSource = dataSource.filter(element => element.id !== selectedItem.id);
            setDataSource(newDataSource);
            message.success('Успешно удалено')
            setOpen(false);
            setConfirmLoading(false);
        } catch (err) {
            setConfirmLoading(false);
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!')
            console.log(err)
        }
    };

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
                okButtonProps={{ danger: true }}
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
                {currentPage && (<div className='pagination-button' onClick={handlePagitanation}>{paginateLoading ? <AiOutlineLoading className='loading-spin' /> : 'Продолжать'}</div>)}
            </div>
        </>
    );
}

export default City;