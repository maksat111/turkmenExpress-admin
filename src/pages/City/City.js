import { React, useEffect, useState } from 'react';
import { Modal, message } from 'antd';
import { axiosInstance } from '../../config/axios';
import TableComponent from '../../components/TableComponent';
import Input from 'antd/es/input/Input';

function City() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [total, setTotal] = useState(null);
    const [newItem, setNewItem] = useState({
        name_ru: '',
        name_en: '',
        name_tk: '',
    })


    const showModal = (item) => {
        setOpen(true);
        setSelectedItem(item);
    };

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            await axiosInstance.delete(`coupon-type/delete/${selectedItem.id}`);
            const newDataSource = dataSource.filter(element => element.id !== selectedItem.id);
            setDataSource(newDataSource);
            message.success('Успешно удалено');
            setSelectedItem(null);
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
        setSelectedItem(null);
    };

    useEffect(() => {
        axiosInstance.get('cities/list').then(res => {
            let a = [];
            setTotal(res.data.count)
            res.data?.results.forEach(element => {
                a.push({
                    key: element.id,
                    id: element.id,
                    name_en: element.name_en,
                    name_tk: element.name_tk,
                    name_ru: element.name_ru,
                    region: element.region?.name_ru
                })
            });
            setDataSource(a);
        }).catch(err => console.log(err));
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Название (рус.)',
            dataIndex: 'name_ru',
            key: 'name_ru',
        },
        {
            title: 'Название (туркм.)',
            dataIndex: 'name_tk',
            key: 'name_tk',
        },
        {
            title: 'Навзание (анг.)',
            dataIndex: 'name_en',
            key: 'name_en',
        },
        {
            title: 'Регион',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'Удалить',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='delete-icon' onClick={() => showModal(record)}>
                    Удалить
                </div>
            ),
        },
        {
            title: 'Изменить',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='update-icon' onClick={() => showAddModal(record)}>
                    Изменить
                </div>
            ),
        },
    ];

    //---------------------------------------------------ADD MODAL-------------------------------------------//
    const showAddModal = (item) => {
        // setSelectedItem(item);
        if (item.id) {
            setNewItem(item);
        };
        setAddOpen(true);
    };

    const handleAddOk = async () => {
        setConfirmLoading(true);
        const formData = new FormData();
        newItem.from_date = fromDate;
        newItem.to_date = toDate;
        const keys = Object.keys(newItem);
        const values = Object.values(newItem);
        keys.forEach((key, index) => {
            formData.append(key, values[index]);
        })
        try {
            if (newItem.id) {
                const res = await axiosInstance.put(`coupon-type/update/${newItem.id}/`, formData);
                const index = dataSource.findIndex(item => item.id == newItem.id);
                setDataSource(previousState => {
                    const a = previousState;
                    a[index].name_ru = newItem.name_ru;
                    a[index].name_en = newItem.name_en;
                    a[index].name_tk = newItem.name_tk;
                    a[index].number = newItem.number;
                    a[index].from_date = fromDate;
                    a[index].toDate = toDate;
                    return a;
                })
            } else {
                const res = await axiosInstance.post('coupon-type/add/', formData);
                setDataSource([...dataSource, newItem])
            }
            setConfirmLoading(false);
            setSelectedItem(null);
            message.success('Успешно')
            setAddOpen(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!')
            console.log(err)
        }
    };

    const handleAddCancel = () => {
        setAddOpen(false);
        setToDate(null);
        setFromDate(null);
    };

    const handleAddChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: [e.target.value] });
    }

    //-------------------------------------------------------pagination -----------------------------------------//
    const onPaginationChange = async (page) => {
        let a = [];
        const res = await axiosInstance.get(`cities/list?page=${page}`);
        res.data.results?.forEach(element => {
            a.push({
                key: element.id,
                id: element.id,
                name_en: element.name_en,
                name_tk: element.name_tk,
                name_ru: element.name_ru,
                region: element.region?.name_ru
            })
        });
        setDataSource(a);
    }

    return (
        <>
            <Modal
                title="Дополните детали"
                open={addOpen}
                onOk={handleAddOk}
                confirmLoading={confirmLoading}
                onCancel={handleAddCancel}
                cancelText={'Отмена'}
                okText={'Да'}
                width={'600px'}
                okType={'primary'}
                style={{ top: '150px' }}
            >
                <div className='banner-add-container'>
                    <div className='add-left'>
                        <div className='add-column'>
                            Номер:
                        </div>
                        <div className='add-column'>
                            Название (рус.):
                        </div>
                        <div className='add-column'>
                            Название (туркм.):
                        </div>
                        <div className='add-column'>
                            Навзание (анг.):
                        </div>
                        <div className='add-column'>
                            От числа:
                        </div>
                        <div className='add-column'>
                            До числв:
                        </div>
                    </div>
                    <div className='add-right'>
                        <div className='add-column'>
                            <Input name='number' type='number' placeholder='Номер' value={newItem.number} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='name_ru' placeholder='Название (рус.)' value={newItem.name_ru} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='name_tk' placeholder='Название (туркм.)' value={newItem.name_tk} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='name_en' placeholder='Название (анг.)' value={newItem.name_en} onChange={handleAddChange} />
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                title="Вы уверены, что хотите удалить?"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                cancelText={'Отмена'}
                okText={'Да'}
                okType={'primary'}
                okButtonProps={{ danger: true }}
                style={{
                    top: '200px'
                }}
            />
            <div className='page'>
                <div className='page-header-content'>
                    <h2>Вид доставки</h2>
                    <div className='add-button' onClick={showAddModal}>Добавлять</div>
                </div>
                <TableComponent dataSource={dataSource} columns={columns} pagination={{ onChange: onPaginationChange, total: total, pageSize: 20 }} />
            </div>
        </>
    );
}

export default City;