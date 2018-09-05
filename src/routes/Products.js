import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, productsModel }) => {
  console.log('mark--------------------');
  console.log(productsModel)
  function handleDelete(id) {
    dispatch({
      type: 'productsModel/delete',
      payload: id,
    })
  }
  return (
    <div>
      <h2>list of products</h2>
      <ProductList
        onDelete={handleDelete}
        products={productsModel}
      />
    </div>
  )
}

export default connect(({ productsModel }) => ({
  productsModel,
}))(Products);
