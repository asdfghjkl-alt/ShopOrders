import React, { useContext } from 'react';
import Product from './Product';
import Title from '../Title';
import { ProductContext } from '../../context';

function ProductList(props) {
  var we = String(props.value);
  const context = useContext(ProductContext);

  var products = context.products.filter((item) => item.page === we);

  products = products.filter((item) => item.onShelf === true);

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title={we} />
          <div className="row">
            {products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
