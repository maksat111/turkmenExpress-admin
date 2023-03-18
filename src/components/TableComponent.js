import { Table } from 'antd';
import React from 'react';

function TableComponent({ dataSource, columns }) {
    return (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
}

export default TableComponent;