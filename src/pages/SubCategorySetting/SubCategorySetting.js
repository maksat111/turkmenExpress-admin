import { React, useEffect, useState } from 'react';
import { Modal, message, Select, Input } from 'antd';
import { axiosInstance } from '../../config/axios';
import TableComponent from '../../components/TableComponent';
import axios from 'axios';
import './SubCategorySetting.css';

function SubCategorySetting() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    const [total, setTotal] = useState(null);
    const [newItemSubCategory, setNewItemSubCategory] = useState([]);
    const [newItemOption, setNewItemOption] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);
    const [optionOptions, setOptionOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [ordering, setOrdering] = useState({});


    const showModal = (item) => {
        setOpen(true);
        setSelectedItem(item);
    };

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            await axiosInstance.delete(`subcategory-options-group/delete/${selectedItem.id}`);
            const newDataSource = dataSource.filter(element => element.id !== selectedItem.id);
            setDataSource(newDataSource);
            message.success('Успешно удалено!')
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
        const a = [];
        const b = [];
        const c = [];
        setLoading(true);
        axiosInstance.get('subcategory-options-group/list').then(async res => {
            setTotal(res.data.count)
            res.data?.results.forEach(element => {
                a.push({
                    key: element.id,
                    id: element.id,
                    subcategory: `${element.subcategory.category.name_ru} | ${element.subcategory.name_ru}`,
                    option: element.option.name_ru
                })
            });
            //----------------------------getting subcategory options---------------------------------------------//
            const subcategories = await axios.get('https://turkmenexpress.com.tm/api/library/subcategories/list/');
            subcategories.data.forEach(item => {
                b.push({
                    label: `${item.category.name_ru} | ${item.name_ru}`,
                    value: `${item.category.name_ru} | ${item.name_ru}`,
                    id: item.id
                });
            });
            //---------------------------------------getting Options----------------------------------------------//
            const options = await axiosInstance.get('options-group/all/list/');
            options.data.forEach(item => {
                c.push({
                    label: item.name_ru,
                    value: item.name_ru,
                    id: item.id
                })
            });
            setSubcategoryOptions(b);
            setOptionOptions(c);
            setDataSource(a);
            setLoading(false);
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
            title: 'Подкатегория',
            dataIndex: 'subcategory',
            key: 'subcategory',
            sorter: true,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Опция',
            dataIndex: 'option',
            key: 'option',
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
            setSelectedItem(item);
            setNewItemSubCategory(subcategoryOptions?.filter(subcategoryOption => subcategoryOption.value == item.subcategory));
            setNewItemOption(optionOptions?.filter(optionOption => optionOption.value == item.option));
        } else {
            setSelectedItem(null);
        }
        setAddOpen(true);
    };

    const handleAddOk = async () => {
        setConfirmLoading(true);
        try {
            if (!selectedItem?.id) {
                const a = [];
                newItemSubCategory.forEach(subcategory => {
                    newItemOption.forEach(async option => {
                        const formData = new FormData();
                        formData.append('subcategory', subcategory.id);
                        formData.append('option', option.id);
                        const newAdded = await axiosInstance.post('subcategory-options-group/add/', formData);
                        a.push({
                            key: newAdded.data.id,
                            id: newAdded.data.id,
                            subcategory: subcategory.label,
                            option: option.label
                        });
                    })
                });
                setDataSource([...dataSource, ...a]);
            } else {
                const formData = new FormData();
                formData.append('subcategory', newItemSubCategory[0].id);
                formData.append('option', newItemOption[0].id);
                const updated = await axiosInstance.patch(`subcategory-options-group/update/${selectedItem.id}/`, formData);
                const index = dataSource.findIndex(item => item.id == selectedItem.id);
                setDataSource(previousState => {
                    const a = previousState;
                    a[index].subcategory = newItemSubCategory[0].value;
                    a[index].option = newItemOption[0].value;
                    return a;
                })
            }
            setNewItemOption([]);
            setNewItemSubCategory([]);
            setConfirmLoading(false);
            message.success('Успешно!');
            setAddOpen(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!');
            console.log(err);
        }
    };

    const handleAddCancel = () => {
        setNewItemOption([]);
        setNewItemSubCategory([]);
        setAddOpen(false);
    };

    const onPaginationChange = async (page) => {
        const a = [];
        const res = await axiosInstance.get(`subcategory-options-group/list?page=${page}`);
        res.data.results?.forEach(element => {
            a.push({
                key: element.id,
                id: element.id,
                subcategory: `${element.subcategory.category.name_ru} | ${element.subcategory.name_ru}`,
                option: element.option.name_ru
            });
        });
        setDataSource(a);
    }

    const handleSubcategorySelectChange = (e) => {
        let a = [];
        subcategoryOptions?.forEach(item => {
            e.forEach(selected => item.value == selected && a.push({ id: item.id, label: selected, value: selected }));
        });
        setNewItemSubCategory(a);
    }

    const handleOptionSelectChange = (e) => {
        let a = [];
        optionOptions?.forEach(item => {
            e.forEach(selected => item.value == selected && a.push({ id: item.id, label: selected, value: selected }));
        });
        setNewItemOption(a);
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
                var query = `subcategory-options-group/list?ordering=${c.field}`;
            } else {
                var query = `subcategory-options-group/list?ordering=-${c.field}`;
            }
            axiosInstance.get(query).then(res => {
                res.data?.results.forEach(element => {
                    data.push({
                        key: element.id,
                        id: element.id,
                        subcategory: `${element.subcategory.category.name_ru} | ${element.subcategory.name_ru}`,
                        option: element.option.name_ru
                    })
                });
                setDataSource(data);
            }).catch(err => console.log(err));
        }
    }

    useEffect(() => {
        axiosInstance.get(`options-group/list?search=${searchValue}`).then(res => {
            setTotal(res.data.count);
            const a = [];
            res.data?.results.forEach(element => {
                a.push({
                    key: element.id,
                    id: element.id,
                    subcategory: `${element.subcategory.category.name_ru} | ${element.subcategory.name_ru}`,
                    option: element.option.name_ru
                })
            });
            setDataSource(a);
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
                width={'700px'}
                okType={'primary'}
                style={{ top: '150px' }}
            >
                <div className='banner-add-container'>
                    <div className='add-left'>
                        <div className='add-column'>
                            Подкатегория:
                        </div>
                        <div className='add-column'>
                            Опция:
                        </div>
                    </div>
                    <div className='add-right'>
                        <div className='subcategory-settings-add-column add-column'>
                            <Select
                                value={newItemSubCategory}
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Выберите подкатегорию"
                                onChange={(e) => handleSubcategorySelectChange(e)}
                                options={subcategoryOptions}
                            />
                        </div>
                        <div className='subcategory-settings-add-column add-column'>
                            <Select
                                value={newItemOption}
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Выберите опцию"
                                onChange={(e) => handleOptionSelectChange(e)}
                                options={optionOptions}
                            />
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
                    <h2>Группа опций в подактегориях</h2>
                    <div className='add-button' onClick={showAddModal}>Добавить</div>
                </div>
                <div className='group-settings-option-header-filters'>
                    <Input placeholder='Search' size='middle' value={searchValue} allowClear onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <TableComponent
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ onChange: onPaginationChange, total: total, pageSize: 20, position: ['topRight', 'bottomRight'] }}
                    active={selectedItem?.id}
                    loading={loading}
                    onChange={handleTableChange}
                />
            </div>
        </>
    );
}

export default SubCategorySetting;