import React, { useContext, useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';
import { AuthContext } from '../auth-context';
import axios from 'axios';
import './Button.css';
import './Navbar.css';

function Navbars() {
  const context = useContext(ProductContext);
  var x = 0;

  const auth = useContext(AuthContext);

  const [user, setUser] = useState({});

  context.cart.forEach((item) => {
    x += item.quantity;
  });

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

  return (
    <Navbar bg="primary" varient="dark" expand="lg" className="navbars">
      <Link to="/">
        <i
          className="fas fa-leaf navbar-brand"
          style={{ fontSize: '300%' }}
        ></i>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-5">
          <Link
            to="/fruit"
            className="nav-link"
            style={{ color: 'chartreuse' }}
          >
            <i className="fas fa-apple-alt"></i> Fruit
          </Link>
          <Link to="/vegetables" className="nav-link">
            <i className="fas fa-lemon"></i> Vegetables
          </Link>
          {auth.admin && (
            <Link to="/add" className="nav-link" style={{ color: 'red' }}>
              <i className="fas fa-plus" style={{ color: 'red' }}></i> Products
              add
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
      <Link to="/cart" className="ml-auto">
        <button className="button" style={{ color: 'yellow' }}>
          {user.name} Cart{' '}
          <span className="mr-2">
            <i className="fa" style={{ fontSize: '24px' }}>
              &#xf07a;
            </i>
            <span className="badge badge-warning" id="lblCartCount">
              {' '}
              {x}{' '}
            </span>
          </span>
        </button>
      </Link>
      {auth.isLoggedIn ? (
        <p></p>
      ) : (
        <Link to="/signup" className="ml-auto">
          <button className="button">
            <span className="mr-2">Signup</span>
          </button>
        </Link>
      )}
      {auth.isLoggedIn ? (
        <Link className="ml-auto" to="/">
          <button
            className="button"
            onClick={auth.logout}
            style={{ color: 'red' }}
          >
            <span className="mr-2">Logout</span>
          </button>
        </Link>
      ) : (
        <Link to="/login" className="ml-auto">
          <button className="button">
            <span className="mr-2">Login</span>
          </button>
        </Link>
      )}
    </Navbar>
  );
}

export default Navbars;
