import React, { useContext } from 'react';
import { ProductContext } from '../../context';

function CartItem({ item }) {
  const { title, img, price } = item.productId;
  const quantity = item.quantity;
  const context = useContext(ProductContext);
  var x = process.env.REACT_APP_BACKEND_URL + 'products/' + img;
  return (
    <div className="row my-1 text-capitalize">
      <div className="col-10 mx-auto col-lg-2 text-center">
        <img
          src={x}
          style={{ width: '5rem', height: '5rem' }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              context.decrement(item.productId);
            }}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{quantity}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              context.addToCart(item.productId);
            }}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center">
        <div
          className="cart-icon"
          onClick={() => {
            context.removeItem(item.productId);
          }}
        >
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center">
        <strong> item total : $ {quantity * price}</strong>
      </div>
    </div>
  );
}

export default CartItem;
