import { Table } from 'antd';
import React from 'react';

function TableComponent({ dataSource, columns }) {
    return (
        <Table rowClassName={(record, rowIndex) => rowIndex == 2 && 'active-row'} dataSource={dataSource} columns={columns} pagination={false} />
    );
}

export default TableComponent;