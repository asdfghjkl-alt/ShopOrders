import React, { useContext } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import { ProductContext } from '../../context';
import CartTotals from './CartTotals';

function Cart() {
  const product = useContext(ProductContext);
  if (product.cart.length > 0) {
    return (
      <React.Fragment>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList props={product} />
        <CartTotals props={product} />
      </React.Fragment>
    );
  } else {
    return <EmptyCart />;
  }
}

export default Cart;
