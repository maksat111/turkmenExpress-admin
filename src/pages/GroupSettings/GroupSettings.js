import { React, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Checkbox, message, Input } from 'antd';
import { axiosInstance } from '../../config/axios';
import TableComponent from '../../components/TableComponent';
import './GroupSettings.css';

function GroupSettings() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    const [newItem, setNewItem] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [ordering, setOrdering] = useState({});
    const [total, setTotal] = useState(null);


    const showModal = (item) => {
        setOpen(true);
        setSelectedItem(item);
    };

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            await axiosInstance.delete(`options-group/delete/${selectedItem.id}/`);
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

    useEffect(() => {
        axiosInstance.get('options-group/list/').then(res => {
            setTotal(res.data.count)
            res.data.results?.forEach(element => {
                element.key = element.id
            });
            setDataSource(res?.data.results);
        }).catch(err => console.log(err));
    }, []);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: '65px',
            style: { alignItems: "center" },
            sorter: true,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Название (рус.)',
            dataIndex: 'name_ru',
            key: 'name_ru',
            sorter: true,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Название (туркм.)',
            dataIndex: 'name_tk',
            key: 'name_tk',
            sorter: true,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Навзание (анг.)',
            dataIndex: 'name_en',
            key: 'name_en',
            sorter: true,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Удалить',
            dataIndex: 'active',
            key: 'active',
            width: '110px',
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
            width: '125px',
            render: (_, record) => (
                <div className='update-icon' onClick={() => showAddModal(record)}>
                    Изменить
                </div>
            ),
        },
    ];

    //---------------------------------------------------ADD MODAL-------------------------------------------//
    const showAddModal = (item) => {
        if (item.id) {
            setNewItem(item);
            setSelectedItem(item);
        }
        setAddOpen(true);
    };

    const handleAddOk = async () => {
        setConfirmLoading(true);
        const formData = new FormData();
        const keys = Object.keys(newItem);
        const values = Object.values(newItem);
        keys.forEach((key, index) => {
            formData.append(key, values[index]);
        })
        try {
            if (newItem.id) {
                const res = await axiosInstance.put(`options-group/update/${newItem.id}/`, formData);
                const index = dataSource.findIndex(item => item.id == newItem.id);
                setDataSource(previousState => {
                    const a = previousState;
                    a[index].name_ru = newItem.name_ru;
                    a[index].name_en = newItem.name_en;
                    a[index].name_tk = newItem.name_tk;
                    return a;
                })
            } else {
                const res = await axiosInstance.post('options-group/add/', formData);
                res.data.key = res.data.id;
                setDataSource([...dataSource, res.data])
            }
            setNewItem(null);
            setConfirmLoading(false);
            message.success('Успешно')
            setAddOpen(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!')
            console.log(err)
        }
    };

    const handleAddCancel = () => {
        setNewItem(null);
        setAddOpen(false);
    };

    const handleAddChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: [e.target.value] });
    }

    const onPaginationChange = async (page) => {
        let a = [];
        const res = await axiosInstance.get(`options-group/list?page=${page}`);
        res.data.results?.forEach(element => {
            element.key = element.id
        });
        setDataSource(res?.data.results);
    }

    const handleTableChange = async (a, b, c) => {
        const data = [];
        if (c.field !== ordering?.field || c.order !== ordering?.order) {
            setOrdering(previousState => {
                let a = previousState;
                a.field = c.field;
                a.order = c.order;
                return a;
            });
            if (c.order == 'ascend') {
                var query = `options-group/list?ordering=${c.field}`;
            } else {
                var query = `options-group/list?ordering=-${c.field}`;
            }
            axiosInstance.get(query).then(res => {
                res.data.results?.forEach(element => {
                    element.key = element.id
                });
                setDataSource(res?.data.results);
            }).catch(err => console.log(err));
        }
    }

    useEffect(() => {
        axiosInstance.get(`options-group/list?search=${searchValue}`).then(res => {
            setTotal(res.data.count);
            res.data.results?.forEach(element => {
                element.key = element.id
            });
            setDataSource(res?.data.results);
        })
    }, [searchValue])

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
                            Название (рус.):
                        </div>
                        <div className='add-column'>
                            Название (туркм.):
                        </div>
                        <div className='add-column'>
                            Навзание (анг.):
                        </div>
                    </div>
                    <div className='add-right'>
                        <div className='add-column'>
                            <Input name='name_ru' placeholder='Название (рус.)' value={newItem?.name_ru} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='name_tk' placeholder='Название (туркм.)' value={newItem?.name_tk} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='name_en' placeholder='Название (анг.)' value={newItem?.name_en} onChange={handleAddChange} />
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
                    <h2>Группа опций</h2>
                    <div className='add-button' onClick={showAddModal}>Добавить</div>
                </div>
                <div className='group-option-header-filters'>
                    <Input placeholder='Search' size='middle' value={searchValue} allowClear onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <TableComponent
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    active={selectedItem?.id}
                    pagination={{ onChange: onPaginationChange, total: total, pageSize: 20, position: ['topRight', 'bottomRight'] }}
                    onChange={handleTableChange}
                />
            </div>
        </>
    );
}

export default GroupSettings;