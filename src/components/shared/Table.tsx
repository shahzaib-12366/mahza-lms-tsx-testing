import React from 'react';
import { Table } from 'antd';

interface CustomTableProps {
  columns: any[]; // You should replace 'any[]' with the actual type of your column data.
  data: any[]; // You should replace 'any[]' with the actual type of your data.
}

export default function CustomTable({ columns, data }: CustomTableProps): JSX.Element {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      style={{ background: 'rgba(16, 186, 172, 1)' }} // Set the background color of the table header
    />
  );
}
