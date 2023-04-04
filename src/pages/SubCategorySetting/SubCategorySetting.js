import { React, useEffect, useState } from 'react';
import { Modal, message, Select } from 'antd';
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
    const [subcategoryOptions, setSubcategoryOptions] = useState(null);
    const [optionOptions, setOptionOptions] = useState(null);


    const showModal = (item) => {
        setOpen(true);
        setSelectedItem(item);
    };

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            await axiosInstance.delete(`regions/delete/${selectedItem.id}`);
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
        const a = [];
        const b = [];
        const c = [];
        axiosInstance.get('subcategory-options-group/list').then(async res => {
            setTotal(res.data.count)
            res.data?.results.forEach(element => {
                a.push({
                    key: element.id,
                    id: element.id,
                    category: element.subcategory.category.name_ru,
                    subcategory: `${element.subcategory.category.name_ru} | ${element.subcategory.name_ru}`,
                    option: element.option.name_ru
                })
            });
            setDataSource(a);
            //----------------------------getting subcategory options---------------------------------------------//
            const subcategories = await axios.get('https://turkmenexpress.com.tm/api/library/subcategories/list/');
            subcategories.data.forEach(item => {
                b.push({
                    label: `${item.category.name_ru} | ${item.name_ru}`,
                    value: `${item.category.name_ru} | ${item.name_ru}`,
                    id: item.id
                });
            });
            setSubcategoryOptions(b);
            //---------------------------------------getting Options----------------------------------------------//
            const options = await axiosInstance.get('options-group/list/');
            options.data.forEach(item => {
                c.push({
                    label: item.name_ru,
                    value: item.name_ru,
                    id: item.id
                })
            });
            setOptionOptions(c);
        }).catch(err => console.log(err));
    }, []);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: '65px',
            style: { alignItems: "center" }
        },
        {
            title: 'Подкатегория',
            dataIndex: 'subcategory',
            key: 'subcategory',
        },
        {
            title: 'Опция',
            dataIndex: 'option',
            key: 'option',
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
            width: '120px',
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
        setAddOpen(true);
    };

    const handleAddOk = async () => {
        setConfirmLoading(true);
        try {
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
            setNewItemOption([]);
            setNewItemSubCategory([]);
            setConfirmLoading(false);
            message.success('Успешно');
            setAddOpen(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!');
            console.log(err);
        }
    };

    const handleAddCancel = () => {
        setAddOpen(false);
    };

    const onPaginationChange = async (page) => {
        const a = [];
        const res = await axiosInstance.get(`subcategory-options-group/list?page=${page}`);
        res.data.results?.forEach(element => {
            a.push({
                key: element.id,
                id: element.id,
                category: element.subcategory.category.name_ru,
                subcategory: element.subcategory.name_ru,
                option: element.option.name_ru
            });
        });
        setDataSource(a);
    }

    const handleSubcategorySelectChange = (e) => {
        console.log(e);
        let a = [];
        subcategoryOptions?.forEach(item => {
            e.forEach(selected => item.value == selected && a.push({ id: item.id, label: selected, value: selected }));
        });
        setNewItemSubCategory(a);
    }

    const handleOptionSelectChange = (e) => {
        console.log(e);
        let a = [];
        optionOptions?.forEach(item => {
            e.forEach(selected => item.value == selected && a.push({ id: item.id, label: selected, value: selected }));
        });
        setNewItemOption(a);
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
                    <div className='add-button' onClick={showAddModal}>Добавлять</div>
                </div>
                <TableComponent
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ onChange: onPaginationChange, total: total, pageSize: 20 }}
                    active={selectedItem?.id}
                />
            </div>
        </>
    );
}

export default SubCategorySetting;