import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { AuthContext } from '../../auth-context';
import { ProductContext } from '../../context';
import { useHistory } from 'react-router-dom';

function ProductEditItem({ item, onDetail }) {
  const context = useContext(ProductContext);

  const {
    title,
    img,
    price,
    stock,
    info,
    _id,
    page,
    company,
    gst,
    onShelf,
  } = item;
  var x = process.env.REACT_APP_BACKEND_URL + 'products/' + img;
  const [product, setProduct] = useState({
    price: price,
    info: info,
    stock: stock,
    company: company,
    onShelf: onShelf,
  });

  const handleCheck = () => {
    setProduct((prevEx) => {
      return {
        ...prevEx,
        onShelf: !product.onShelf,
      };
    });
  };

  const history = useHistory();

  const auth = useContext(AuthContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prevEx) => {
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
          'products/updateproduct/' +
          _id.toString(),
        product,
        {
          headers: { Authorization: 'Bearer ' + auth.token },
        }
      );
      context.searchForData();
      history.push('/add');
      onDetail('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="row my-1 text-capitalize" onSubmit={onSave}>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <img
          src={x}
          style={{ width: '3rem', height: '3rem' }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">page : </span>
        {page}
      </div>
      <div className="col-lg-1">
        <input
          type="checkbox"
          name="gst"
          className="form-control"
          disabled={true}
          checked={gst}
        />
      </div>
      <Form.Group className="col-10 mx-auto col-lg-1">
        <Form.Control
          required
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="col-10 mx-auto col-lg-1">
        <Form.Control
          required
          type="company"
          name="company"
          value={product.company}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="col-10 mx-auto col-lg-2">
        <Form.Control
          required
          type="text"
          name="info"
          value={product.info}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="col-lg-1">
        <Form.Control
          value={product.onShelf}
          type="checkbox"
          name="onShelf"
          checked={product.onShelf}
          onChange={handleCheck}
        />
      </Form.Group>
      <div className="col-10 mx-auto col-lg-1">
        <button>
          <i className="fas fa-save" onClick={onSave}></i>
        </button>
      </div>
    </Form>
  );
}

export default ProductEditItem;
