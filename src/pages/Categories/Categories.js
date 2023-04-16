import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import { Modal, message, Upload, Select, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import './Categories.css';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function Categories() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [progress, setProgress] = useState(0);
    const [fileList, setFileList] = useState([]);
    const [addOpen, setAddOpen] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [newItem, setNewItem] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [ordering, setOrdering] = useState({})

    useEffect(() => {
        axiosInstance.get('categories/list').then(async (res) => {
            res.data?.forEach(element => {
                element.key = element.id
            });
            setDataSource(res?.data);
        }).catch(err => console.log(err))
    }, [])

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: '65px',
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
            title: 'Logo',
            dataIndex: 'image',
            key: 'image',
            render: (_, record) => (
                <img className='brand-image' src={record.image} alt={record.name_ru} />
            ),
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
                <div className='update-icon' onClick={() => showAddModal(record)} >
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
            const newDataSource = dataSource.filter(element => element.id !== selectedItem.id);
            await axiosInstance.delete(`categoris/delete/${selectedItem.id}/`);
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

    //-----------------------------------------Add Modal-------------------------------------------------//
    const showAddModal = (item) => {
        if (item.id) {
            setSelectedItem(item);
            setNewItem(item);
        }
        setAddOpen(true);
    };

    const handleAddOk = async () => {
        setConfirmLoading(true);
        const formData = new FormData();
        formData.append('name_ru', newItem.name_ru);
        formData.append('name_en', newItem.name_en);
        formData.append('name_tk', newItem.name_tk);
        if (fileList.length !== 0) {
            newItem.image = URL.createObjectURL(fileList[0]?.originFileObj);
            formData.append("image", fileList[0]?.originFileObj, fileList[0]?.originFileObj.name);
        }
        try {
            if (newItem.id) {
                const res = await axiosInstance.patch(`categoris/update/${newItem.id}/`, formData);
                const index = dataSource.findIndex(item => item.id == newItem.id);
                setDataSource(previousState => {
                    const a = previousState;
                    a[index].name_ru = newItem.name_ru;
                    a[index].name_en = newItem.name_en;
                    a[index].name_tk = newItem.name_tk;
                    a[index].image = newItem.image;
                    return a;
                })
            } else {
                const res = await axiosInstance.post('categories/add/', formData);
                setDataSource([...dataSource, newItem])
            }
            setNewItem(null);
            message.success('Успешно!')
            setAddOpen(false);
            setFileList([]);
            setConfirmLoading(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!')
            console.log(err)
        }
    };

    const handleAddCancel = () => {
        setFileList([]);
        setNewItem(null);
        setAddOpen(false);
    };

    const handleAddCustomRequest = async (options) => {
        const { onSuccess, onError, file, onProgress } = options;

        const config = {
            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: event => {
                const percent = Math.floor((event.loaded / event.total) * 100);
                setProgress(percent);
                if (percent === 100) {
                    setTimeout(() => setProgress(0), 1000);
                }
                onProgress({ percent: (event.loaded / event.total) * 100 });
            }
        };
        try {
            onSuccess("Ok");
        } catch (err) {
            onError('Upload error');
        }
    };

    //-----------------------------------------upload--------------------------------------------//
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handlePreviewCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        file.preview = await getBase64(file.originFileObj);
        setPreviewImage(file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
          </div>
        </div>
    );

    const handleAddChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: [e.target.value] });
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
                var query = `categories/list?ordering=${c.field}`;
            } else {
                var query = `categories/list?ordering=-${c.field}`;
            }
            axiosInstance.get(query).then(res => {
                res.data?.forEach(element => {
                    element.key = element.id
                });
                setDataSource(res.data);
            }).catch(err => console.log(err));
        }
    }

    useEffect(() => {
        axiosInstance.get(`categories/list?search=${searchValue}`).then(res => {
            res.data?.forEach(element => {
                element.key = element.id
            });
            setDataSource(res.data);
        })
    }, [searchValue])

    return (
        <>
            <Modal
                title="Дополните детали для добавления"
                open={addOpen}
                onOk={handleAddOk}
                confirmLoading={confirmLoading}
                onCancel={handleAddCancel}
                cancelText={'Отмена'}
                okText={'Да'}
                width={'600px'}
                okType={'primary'}
                style={{ top: '100px' }}
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
                        <div className='add-picture'>
                            Logo
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
                        <div className='add-picture'>
                            {newItem?.id && <img className='brand-image' src={newItem?.image} alt={newItem?.name_ru} />}
                            <Upload
                                customRequest={handleAddCustomRequest}
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length == 0 && uploadButton}
                            </Upload>
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
                okButtonProps={{ danger: true }}
                cancelText={'Отмена'}
                okText={'Да'}
                okType={'primary'}
                style={{
                    top: '200px'
                }}
            />
            <div className='page'>
                <div className='page-header-content'>
                    <h2>Категории</h2>
                    <div className='add-button' onClick={showAddModal}>Добавить</div>
                </div>
                <div className='categories-header-filters'>
                    <Input placeholder='Search' size='middle' value={searchValue} allowClear onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <TableComponent active={selectedItem?.id} columns={columns} dataSource={dataSource} pagination={false} onChange={handleTableChange} />
            </div>
        </>
    );
}

export default Categories;