import { Table } from 'antd';
import React from 'react';

function TableComponent({ dataSource, columns, pagination, active }) {
    return (
        <Table rowClassName={(record, rowIndex) => record.id == active && 'active-row'} dataSource={dataSource} columns={columns} pagination={pagination} />
    );
}

export default TableComponent;