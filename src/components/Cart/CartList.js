import React from 'react';
import CartItem from './CartItem';

function CartList(props) {
  const { cart } = props.props;

  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.productId._id} item={item} />;
      })}
    </div>
  );
}

export default CartList;
