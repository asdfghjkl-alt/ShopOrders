import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../auth-context';
import Title from '../Title';
import OrderItem from './OrderItem';

function GetOrders() {
  const auth = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const use = async () => {
      try {
        const us = await axios.get(
          process.env.REACT_APP_BACKEND_URL + 'orders',
          {
            headers: { Authorization: 'Bearer ' + auth.token },
          }
        );
        setOrders(us.data.order);
      } catch (err) {
        console.log(err);
      }
    };
    if (auth.token) {
      use();
    }
  }, [auth]);

  return (
    <div>
      <Title name="checkout" />
      <div className="container" style={{ padding: '5%' }}>
        <div className="row">
          {orders.map((order) => {
            return <OrderItem key={order._id} order={order} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default GetOrders;
