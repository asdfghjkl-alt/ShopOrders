import React from 'react';

import { Card } from 'react-bootstrap';

function OrderItem(props) {
  let subTotal = 0;
  let tax = 0;

  let tempTax = 0;

  props.order.cart.forEach((item) => {
    subTotal += item.quantity * item.productId.price;
    if (item.productId.gst === true) {
      tempTax += item.quantity * item.productId.price;
    }
  });

  tax = tempTax / 11;

  tax = tax.toFixed(2);

  return (
    <div style={{ padding: '1%' }} className="col-lg-4">
      <Card>
        <Card.Header>
          <p>ID: {props.order._id}</p>
          <p>Paid: {props.order.payedDate}</p>
        </Card.Header>
        <Card.Body>
          {props.order.cart.map((item) => {
            return (
              <Card.Text key={item._id}>
                {item.productId.title}: {'      '}${' '}
                {item.productId.price * item.quantity}
                <p className="text-muted">
                  Qty {item.quantity} @ ${item.productId.price}
                </p>
              </Card.Text>
            );
          })}
        </Card.Body>
        <Card.Footer>
          <h4 style={{ color: 'black' }}>Total: $ {subTotal}</h4>
          {'      '}incl GST: {tax}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default OrderItem;
