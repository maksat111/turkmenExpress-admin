import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import TableComponent from '../../components/TableComponent';
import { axiosInstance } from '../../config/axios';
import { PlusOutlined } from '@ant-design/icons';
import './Banners.css';
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function Banners(props) {
    const [dataSource, setDataSource] = useState([]);
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [confirmUpdateLoading, setConfirmUpdateLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    useEffect(() => {
        axiosInstance.get('banners/list').then(res => {
            const a = [];
            res?.data.forEach(item => {
                a.push({
                    key: item.id,
                    id: item.id,
                    image: item.image,
                    active: item.active
                })
            });
            setDataSource(a);
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
            title: 'Banner image',
            dataIndex: 'image',
            key: 'image',
            render: (_, record) => (
                <img className='banner-image' src={record.image} alt='banner' />
            ),
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <Checkbox name='late' disabled checked={record.active} />
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='delete-icon' onClick={showModal}>
                    {/* <TiDelete /> */}
                    Удалить
                </div>
            ),
        },
        {
            title: 'Update',
            dataIndex: 'active',
            key: 'active',
            render: (_, record) => (
                <div className='update-icon' onClick={() => showUpdateModal(record)}>
                    {/* <TiDelete /> */}
                    Изменить
                </div>
            ),
        },
    ];

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

    const showUpdateModal = (item) => {
        setSelectedItem(item);
        setOpenUpdate(true);
    };

    const handleUpdateOk = () => {
        setConfirmUpdateLoading(true);
        setTimeout(() => {
            setOpenUpdate(false);
            setConfirmUpdateLoading(false);
        }, 2000);
    };

    const handleUpdateCancel = () => {
        setOpenUpdate(false);
    };

    // const handleUploadCancel = () => setPreviewOpen(false);

    // const handlePreview = async (file) => {
    //     if (!file.url && !file.preview) {
    //         file.preview = await getBase64(file.originFileObj);
    //     }
    //     setPreviewImage(file.url || file.preview);
    //     setPreviewOpen(true);
    //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    // };

    // const handleUploadChange = ({ fileList: newFileList }) => setFileList(newFileList);

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

    const updateActiveChange = () => {
        let a = selectedItem;
        a.active = (!a.active);
        setSelectedItem(a)
    }

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
            <Modal
                title="Изменить"
                width='600px'
                open={openUpdate}
                onOk={handleUpdateOk}
                confirmLoading={confirmUpdateLoading}
                onCancel={handleUpdateCancel}
                cancelText={'Отмена'}
                okText={'Да'}
                okType={'primary'}
                style={{
                    top: '200px'
                }}
            >
                <div className='banner-update-container'>
                    <div className='banner-update-left'>
                        <p className='banner-image-content'>Image</p>
                        {/* <p>New Image</p> */}
                    </div>
                    <div className='banner-update-right'>
                        <img className='banner-image' src={selectedItem?.image} />
                        {/* <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            // fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleUploadChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload> */}
                    </div>
                </div>
            </Modal>
            <div className='banners-container page'>
                <h2>Banners</h2>
                <TableComponent dataSource={dataSource} columns={columns} />
            </div>
        </>
    );
}

export default Banners;