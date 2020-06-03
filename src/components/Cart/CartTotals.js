import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CartTotals(props) {
  const { cart } = props.props;
  let subTotal = 0;
  let tempTax = 0;
  cart.forEach((item) => {
    subTotal += item.quantity * item.productId.price;
    if (item.productId.gst === true) {
      tempTax += item.quantity * item.productId.price;
    }
  });

  let tax = tempTax / 11;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-auto col-sm-8 text-capitalize">
            <Link to="/products">
              <Button variant="outline-warning">Go Back To Shop</Button>
            </Link>
            <h5>
              <span className="text-title">GST :</span>
              <strong>$ {parseFloat(tax.toFixed(2))}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {subTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;
