import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getDecodedToken } from '../../utils/getDecodedToken';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import { Modal, message, Upload, Checkbox, Select, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import './Products.css';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function Products() {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [progress, setProgress] = useState(0);
    const [fileList, setFileList] = useState([]);
    const [videoList, setVideoList] = useState([]);
    const [addOpen, setAddOpen] = useState(false);
    const [newItemSubcategory, setNewItemSubcategory] = useState(null);
    const [subcategoryOptions, setSubcategoryOptions] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [newItem, setNewItem] = useState(null);
    const [total, setTotal] = useState(null);
    const [newItemBrand, setNewItemBrand] = useState(null);
    const [brandOptions, setBrandOptions] = useState(null);
    const [newItemUserType, setNewItemUserType] = useState(null);
    const [userTypeOptions, setUserTypeOptions] = useState(null);
    const [newItemRegion, setNewItemRegion] = useState(null);
    const [regionOptions, setRegionOptions] = useState(null);
    const [loading, setLoading] = useState(false);
    const [video, setVideo] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [ordering, setOrdering] = useState({});

    useEffect(() => {
        setLoading(true);
        const a = [];
        const b = [];
        const c = [];
        const d = [];
        setCurrentUser(getDecodedToken());
        axiosInstance.get('products/list').then(async (res) => {
            setTotal(res.data.count)
            res.data?.results.forEach(element => {
                element.key = element.id;
                element.category = element.subcategory.category.name_ru;
                element.subcategory = element.subcategory.name_ru;
                element.brand = element.brand ? element.brand.name : 'null';
            });
            setDataSource(res?.data.results);
            setLoading(false);
        }).then(async () => {
            //----------------------------getting subcategory options---------------------------------------------//
            const subcategories = await axios.get('https://turkmenexpress.com.tm/api/library/subcategories/list/');
            subcategories.data.forEach(item => {
                b.push({
                    label: `${item.category.name_ru} | ${item.name_ru}`,
                    value: `${item.category.name_ru} | ${item.name_ru}`,
                    id: item.id
                });
            });

            //----------------------------getting userType options---------------------------------------------//
            const regions = await axiosInstance.get('users/list/');
            regions.data.forEach(item => {
                d.push({
                    label: `${item.surname} ${item.name}`,
                    value: `${item.surname} ${item.name}`,
                    id: item.id
                });
            });

            //----------------------------getting Regions options---------------------------------------------//
            const userType = await axiosInstance.get('regions/list/');
            userType.data.forEach(item => {
                a.push({
                    label: item.name_ru,
                    value: item.name_ru,
                    id: item.id
                });
            });

            //----------------------------getting brands options---------------------------------------------//
            const brands = await axiosInstance.get('brands/all/list/');
            brands.data.forEach(item => {
                c.push({
                    label: item.name,
                    value: item.name,
                    id: item.id
                });
            });
            setRegionOptions(a);
            setSubcategoryOptions(b);
            setUserTypeOptions(d);
            setBrandOptions(c);
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
            title: 'Главная картинка',
            dataIndex: 'main_image',
            key: 'main_image',
            render: (_, record) => (
                <img className='product-image' src={record.main_image} alt={record.name_ru} />
            ),
        },
        {
            title: 'Название (рус.)',
            dataIndex: 'name_ru',
            key: 'name_ru',
            sorter: true,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
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
            title: 'Бренд',
            dataIndex: 'brand',
            key: 'brand',
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
            await axiosInstance.delete(`products/delete/${selectedItem.id}/`);
            setDataSource(newDataSource);
            message.success('Успешно удалено!')
            setOpen(false);
            setConfirmLoading(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!');
            console.log(err)
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    //-----------------------------------------Add Modal-------------------------------------------------//
    const showAddModal = async (item) => {
        if (item.id) {
            const provider = await userTypeOptions.filter(i => i.id == item.provider);
            setNewItemUserType(provider[0]);

            const brand = brandOptions.filter(i => i.label == item.brand);
            setNewItemBrand(brand[0]);

            const region = regionOptions.filter(i => i.id == item.region);
            setNewItemRegion(region[0]);

            const subcategory = subcategoryOptions.filter(i => i.value == item.subcategory);
            setNewItemSubcategory(subcategory[0]);
            setNewItem(item);
            console.log(item)
            setSelectedItem(item);
        }
        setAddOpen(true);
    };

    const handleAddOk = async () => {
        setConfirmLoading(true);
        const formData = new FormData();
        newItem.region = newItemRegion.id;
        newItem.brand = newItemBrand.id;
        newItem.user = currentUser?.user_id;
        newItem.provider = newItemUserType.id;
        newItem.subcategory = newItemSubcategory.id;
        const keys = Object.keys(newItem);
        const values = Object.values(newItem);
        keys.forEach((key, index) => {
            formData.append(key, values[index]);
        });

        if (fileList.length !== 0) {
            newItem.main_image = URL.createObjectURL(fileList[0]?.originFileObj);
            formData.append("main_image", fileList[0]?.originFileObj, fileList[0]?.originFileObj.name);
        }

        if (videoList.length !== 0) {
            newItem.main_video = URL.createObjectURL(videoList[0]?.originFileObj);
            formData.append("main_video", videoList[0]?.originFileObj, videoList[0]?.originFileObj.name);
        }

        try {
            if (newItem.id) {
                const res = await axiosInstance.patch(`products/update/${newItem.id}/`, formData);
                const index = dataSource.findIndex(item => item.id == newItem.id);
                setDataSource(previousState => {
                    const a = previousState;
                    keys.forEach((key, i) => {
                        a[index][key] = values[i];
                    })
                    return a;
                })
            } else {
                const res = await axiosInstance.post('products/add/', formData);
                console.log(res.data)
                setDataSource([...dataSource, newItem])
            }
            setNewItem(null);
            setNewItemBrand(null);
            setNewItemSubcategory(null);
            setNewItemUserType(null);
            setNewItemRegion(null);
            setFileList([]);
            setVideoList([]);
            message.success('Успешно!');
            setConfirmLoading(false);
        } catch (err) {
            setConfirmLoading(false)
            message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз!');
            console.log(err)
        }
    };

    const handleAddCancel = () => {
        setNewItem(null);
        setNewItemBrand(null);
        setNewItemSubcategory(null);
        setNewItemUserType(null);
        setNewItemRegion(null);
        setAddOpen(false);
        setFileList([]);
        setVideoList([]);
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
    //-----------------------------------------video upload--------------------------------------------//
    const handleVideoChange = ({ fileList: newFileList }) => setVideoList(newFileList);

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
        e.target.name == 'isset' || e.target.name == 'approved'
            ? setNewItem({ ...newItem, [e.target.name]: [e.target.checked] })
            : setNewItem({ ...newItem, [e.target.name]: [e.target.value] });
    }

    const onPaginationChange = async (page) => {
        const res = await axiosInstance.get(`products/list?page=${page}`);
        res.data.results?.forEach(element => {
            element.key = element.id;
            element.category = element.subcategory.category.name_ru;
            element.subcategory = element.subcategory.name_ru;
            element.brand = element.brand ? element.brand.name : 'null';
        });
        setDataSource(res.data.results);
    }

    const handleUserTypeSelect = (e) => {
        const filtered = userTypeOptions.filter(item => item.value == e);
        setNewItemUserType(filtered[0]);
    }

    const handleBrandSelect = (e) => {
        const filtered = brandOptions.filter(item => item.value == e);
        setNewItemBrand(filtered[0]);
    }

    const handleRegionSelect = (e) => {
        const filtered = regionOptions.filter(item => item.value == e);
        setNewItemRegion(filtered[0]);
    }

    const handleSubcategorySelect = (e) => {
        const filtered = subcategoryOptions.filter(item => item.value == e);
        setNewItemSubcategory(filtered[0]);
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
                var query = `products/list?ordering=${c.field}`;
            } else {
                var query = `products/list?ordering=-${c.field}`;
            }
            axiosInstance.get(query).then(res => {
                res.data?.results.forEach(element => {
                    element.key = element.id;
                    element.category = element.subcategory.category.name_ru;
                    element.subcategory = element.subcategory.name_ru;
                    element.brand = element.brand ? element.brand.name : 'null';
                });
                setDataSource(res?.data.results);
            }).catch(err => console.log(err));
        }
    }

    useEffect(() => {
        axiosInstance.get(`products/list?search=${searchValue}`).then(res => {
            setTotal(res.data.count);
            res.data?.results.forEach(element => {
                element.key = element.id;
                element.category = element.subcategory.category.name_ru;
                element.subcategory = element.subcategory.name_ru;
                element.brand = element.brand ? element.brand.name : 'null';
            });
            setDataSource(res?.data.results);
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
                width={'850px'}
                okType={'primary'}
                style={{ top: '0px' }}
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
                        <div className='add-column'>
                            Цена в Китае:
                        </div>
                        <div className='add-column'>
                            Продажная цена:
                        </div>
                        <div className='add-column'>
                            Вес:
                        </div>
                        <div className='add-column'>
                            Количество:
                        </div>
                        <div className='add-column'>
                            В наличии:
                        </div>
                        <div className='add-column'>
                            Подкатегория:
                        </div>
                        <div className='add-picture'>
                            Главная картинка:
                        </div>
                        <div className='add-picture'>
                            Видео:
                        </div>
                        <div className='add-textarea'>
                            Короткое описание (рус.):
                        </div>
                        <div className='add-textarea'>
                            Короткое описание (анг.):
                        </div>
                        <div className='add-textarea'>
                            Короткое описание (туркм.):
                        </div>
                        <div className='add-textarea'>
                            Полное описание (рус.):
                        </div>
                        <div className='add-textarea'>
                            Полное описание (анг.):
                        </div>
                        <div className='add-textarea'>
                            Полное описание (туркм.):
                        </div>
                        <div className='add-column'>
                            Url адрес:
                        </div>
                        <div className='add-column'>
                            Обработан:
                        </div>
                        <div className='add-column'>
                            Бренд:
                        </div>
                        <div className='add-column'>
                            Поставщик:
                        </div>
                        <div className='add-column'>
                            Регион:
                        </div>
                    </div>
                    <div className='product-add-right'>
                        <div className='add-column'>
                            <Input name='name_ru' placeholder='Название (рус.)' value={newItem?.name_ru} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='name_tk' placeholder='Название (туркм.)' value={newItem?.name_tk} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='name_en' placeholder='Название (анг.)' value={newItem?.name_en} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='price_china' placeholder='Цена в Китае' value={newItem?.price_china} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='price' placeholder='Продажная цена' value={newItem?.price} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='weight' placeholder='Вес' value={newItem?.weight} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='count' placeholder='Количество' value={newItem?.count} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Checkbox name='isset' value={newItem?.isset} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Select
                                showSearch
                                aria-required={true}
                                value={newItemSubcategory}
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Подкатегория"
                                onChange={(e) => handleSubcategorySelect(e)}
                                options={subcategoryOptions}
                            />
                        </div>
                        <div className='add-picture'>
                            {newItem?.id && <img className='product-image' src={newItem?.main_image} alt={newItem?.name_ru} />}
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
                        <div className='add-picture'>
                            {newItem?.id && <img className='product-image' src={newItem?.main_image} alt={newItem?.name_ru} />}
                            <Upload
                                customRequest={handleAddCustomRequest}
                                listType="picture-card"
                                fileList={videoList}
                                onPreview={handlePreview}
                                onChange={handleVideoChange}
                            >
                                {videoList.length == 0 && uploadButton}
                            </Upload>
                        </div>
                        <div className='add-textarea'>
                            <Input.TextArea name='short_desc_ru' placeholder='Короткое описание (рус.):' value={newItem?.short_desc_ru} onChange={handleAddChange} />
                        </div>
                        <div className='add-textarea'>
                            <Input.TextArea name='short_desc_en' placeholder='Короткое описание (анг.):' value={newItem?.short_desc_en} onChange={handleAddChange} />
                        </div>
                        <div className='add-textarea'>
                            <Input.TextArea name='short_desc_tk' placeholder='Короткое описание (туркм.):' value={newItem?.short_desc_tk} onChange={handleAddChange} />
                        </div>
                        <div className='add-textarea'>
                            <Input.TextArea name='long_desc_ru' placeholder='Короткое описание (рус.):' value={newItem?.long_desc_ru} onChange={handleAddChange} />
                        </div>
                        <div className='add-textarea'>
                            <Input.TextArea name='long_desc_en' placeholder='Короткое описание (анг.):' value={newItem?.long_desc_en} onChange={handleAddChange} />
                        </div>
                        <div className='add-textarea'>
                            <Input.TextArea name='long_desc_tk' placeholder='Короткое описание (туркм.):' value={newItem?.long_desc_tk} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Input name='link' placeholder='Url адрес' value={newItem?.link} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Checkbox name='approved' value={newItem?.approved} onChange={handleAddChange} />
                        </div>
                        <div className='add-column'>
                            <Select
                                showSearch
                                aria-required={true}
                                value={newItemBrand}
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Бренд"
                                onChange={(e, a) => handleBrandSelect(e)}
                                options={brandOptions}
                            />
                        </div>
                        <div className='add-column'>
                            <Select
                                showSearch
                                aria-required={true}
                                value={newItemUserType}
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Поставщик"
                                onChange={(e) => handleUserTypeSelect(e)}
                                options={userTypeOptions}
                            />
                        </div>
                        <div className='add-column'>
                            <Select
                                showSearch
                                aria-required={true}
                                value={newItemRegion}
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Регион"
                                onChange={(e) => handleRegionSelect(e)}
                                options={regionOptions}
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
                    <h2>{`Товары (${total})`}</h2>
                    <div className='add-button' onClick={showAddModal}>Добавить</div>
                </div>
                <div className='product-header-filters'>
                    <Input placeholder='Search' size='middle' value={searchValue} allowClear onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <TableComponent
                    active={selectedItem?.id}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={{ onChange: onPaginationChange, total: total, pageSize: 20, position: ['topRight', 'bottomRight'] }}
                    loading={loading}
                    onChange={handleTableChange}
                />
            </div>
        </>
    );
}

export default Products;