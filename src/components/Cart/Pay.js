import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { ProductContext } from '../../context';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../../auth-context';
import Title from '../Title';

function Pay() {
  const context = useContext(ProductContext);

  const auth = useContext(AuthContext);

  const [user, setUser] = useState({});

  const history = useHistory();

  let tempCart = context.cart;

  let date = false;

  if (!!date) {
    date = new Date(new Date().getTime() + 1000 * 60 * 60);

    date = date.toISOString();
  }

  useEffect(() => {
    const use = async () => {
      const us = await axios.get(process.env.REACT_APP_BACKEND_URL + 'users', {
        headers: { Authorization: 'Bearer ' + auth.token },
      });
      setUser(us.data);
    };
    if (auth.token) {
      use();
    } else {
      setUser({});
    }
  }, [auth]);

  let tempTax = 0;
  let subTotal = 0;
  tempCart.forEach((item) => {
    subTotal += item.quantity * item.productId.price;
    if (item.productId.gst === true) {
      tempTax += item.quantity * item.productId.price;
    }
  });

  let tax = tempTax / 11;

  const onSubmit = async (event) => {
    try {
      await axios.post(
        process.env.REACT_APP_BACKEND_URL + 'orders/create',
        { cart: tempCart },
        {
          headers: { Authorization: 'Bearer ' + auth.token },
        }
      );
      context.searchForData();
      context.cart.forEach((item) => {
        context.updateStock(
          {
            thing: item.quantity,
          },
          item._id
        );
      });
      context.removeAll();
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Title name="checkout" />
      <div className="container row" style={{ padding: '5%' }}>
        <div className="col-lg-4" style={{ padding: '1%' }}>
          <Card>
            <Card.Header>
              <h4>ID: to be assigned</h4>
              <h4>Pending: {date}</h4>
            </Card.Header>
            <Card.Body>
              {tempCart.map((item) => {
                return (
                  <Card.Text key={item.productId._id}>
                    {item.productId.title}: {'      '}$ {item.productId.price}
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
        <div className="col-lg-4" style={{ padding: '1%' }}>
          <Card>
            <Card.Header>
              <h4>Payment Details</h4>
            </Card.Header>
            <Card.Body>
              <p>Name: {user.name}</p>
              <p>Credit Card: 3424 1345 1562 2545</p>
            </Card.Body>
            <Card.Footer>
              <p>email: {user.email}</p>
              <p>phone: {user.phone}</p>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-lg-4" style={{ padding: '1%' }}>
          <Card>
            <Card.Header>
              <h4>Delivery Details</h4>
            </Card.Header>
            <Card.Body>
              <p>Name: {user.name}</p>
              <p>{user.address}</p>
            </Card.Body>
            <Card.Footer>
              <p>email: {user.email}</p>
              <p>phone: {user.phone}</p>
            </Card.Footer>
          </Card>
        </div>
        <Link to="/cart">
          <Button variant="outline-warning">Go Back To Shop</Button>
        </Link>
        <Button variant="success" onClick={onSubmit}>
          <i className="fa fa-id-card" aria-hidden="true"></i> Pay By Card
        </Button>
      </div>
    </div>
  );
}

export default Pay;
