import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, LocaleProvider } from 'antd';
import zhCn from 'antd/lib/locale-provider/zh_CN'

const ProductList = ({ onDelete, products }) => {
  const columns = [{
    title: '字段一',
    dataIndex: 'name',
  }, {
    title: '字段二',
    render: (text, record) => {
      return (
        <Popconfirm
          title="确定删除?"
          onConfirm={() => onDelete(record.id)}
        >
          <Button>删除</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <LocaleProvider locale={zhCn}>
      <Table
        dataSource={products}
        columns={columns}
      />
    </LocaleProvider>
  );
}

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

export default ProductList;
