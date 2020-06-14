import React, { useContext, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../auth-context';
import axios from 'axios';
import { ProductContext } from '../../context';

function UserEdit() {
  const context = useContext(ProductContext);
  const auth = useContext(AuthContext);

  const [users, setUser] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    admin: false,
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
    }
  }, [auth.token]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevEx) => {
      return {
        ...prevEx,
        [name]: value,
      };
    });
  }

  const onSave = async (event) => {
    try {
      await axios.patch(
        process.env.REACT_APP_BACKEND_URL +
          'users/edit/' +
          users._id.toString(),
        users,
        {
          headers: { Authorization: 'Bearer ' + auth.token },
        }
      );
      context.searchForData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="row my-1" onSubmit={onSave} style={{ padding: '5% 1%' }}>
      <Form.Group className="col-lg-2">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          required
          type="text"
          name="name"
          value={users.name}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="col-10 mx-auto col-lg-1">
        <Form.Label>Email: </Form.Label>
        {users.email}
      </div>
      <Form.Group className="col-lg-2">
        <Form.Label>Phone: </Form.Label>
        <Form.Control
          required
          type="text"
          name="phone"
          value={users.phone}
          pattern="^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="col-lg-2">
        <Form.Label>Address: </Form.Label>
        <Form.Control
          required
          type="text"
          name="address"
          value={users.address}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="col-10 mx-auto col-lg-2 form-group">
        <Form.Label>Save: </Form.Label>
        <button onClick={onSave} className="form-control">
          <i className="fas fa-save"></i>
        </button>
      </div>
    </Form>
  );
}

export default UserEdit;
