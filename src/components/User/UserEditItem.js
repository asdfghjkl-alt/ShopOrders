import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth-context';
import axios from 'axios';
import { ProductContext } from '../../context';

function UserItem({ user, onDetail }) {
  const context = useContext(ProductContext);
  const auth = useContext(AuthContext);
  const { admin, _id, email, name, phone, address } = user;

  const [users, setUser] = useState({
    admin: admin,
    phone: phone,
    address: address,
    name: name,
  });

  const handleCheck = () => {
    setUser((prevEx) => {
      return {
        ...prevEx,
        admin: !users.admin,
      };
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevEx) => {
      return {
        ...prevEx,
        [name]: value,
      };
    });
  }

  const history = useHistory();

  const onSave = async () => {
    try {
      await axios.patch(
        process.env.REACT_APP_BACKEND_URL + 'users/edit/' + _id.toString(),
        users,
        {
          headers: { Authorization: 'Bearer ' + auth.token },
        }
      );
      onDetail('');
      context.searchForData();
      history.push('/add');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="row my-1" onSubmit={onSave}>
      <Form.Group className="col-10 mx-auto col-lg-1">
        <Form.Control
          type="checkbox"
          name="admin"
          value={users.admin}
          checked={users.admin}
          onChange={handleCheck}
        />
      </Form.Group>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">name : </span>
        {name}
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">email : </span>
        {email}
      </div>
      <Form.Group className="col-lg-1">
        <Form.Label>Phone: </Form.Label>
        <Form.Control
          required
          type="text"
          name="phone"
          value={users.phone}
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
      <div className="col-10 mx-auto col-lg-1">
        <button onClick={onSave}>
          <i className="fas fa-save"></i>
        </button>
      </div>
    </Form>
  );
}

export default UserItem;
