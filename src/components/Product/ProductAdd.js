import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../../context';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../auth-context';
import ProductItem from './ProductItem';
import ProductEditItem from './ProductEditItem';

function ProductAdd() {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    company: '',
    info: '',
    stock: 0,
    page: 'fruit',
    gst: false,
    onShelf: false,
  });
  const auth = useContext(AuthContext);
  const context = useContext(ProductContext);

  const [img, setImg] = useState('');
  const [productId, setProductId] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setNewProduct((prevEx) => {
      return {
        ...prevEx,
        [name]: value,
      };
    });
  }

  let history = useHistory();
  async function onSubmit(event) {
    const fd = new FormData();
    fd.append('img', img, img.name);
    event.preventDefault();

    Object.keys(newProduct).forEach(function (k) {
      fd.append(k, newProduct[k]);
    });

    try {
      await axios.post(process.env.REACT_APP_BACKEND_URL + 'products/add', fd, {
        headers: { Authorization: 'Bearer ' + auth.token },
      });
      context.searchForData();
      setNewProduct((prevEx) => {
        return {
          title: '',
          price: 0,
          company: '',
          info: '',
          stock: 0,
          page: 'fruit',
          gst: false,
          onShelf: false,
        };
      });
      history.push('/add');
    } catch (error) {
      console.error(error);
    }
  }

  const fileSelectedHandler = (event) => {
    setImg(event.target.files[0]);
  };

  const onDetail = (productid) => {
    setProductId(productid);
  };

  const handleCheck = () => {
    setNewProduct((prevEx) => {
      return {
        ...prevEx,
        gst: !newProduct.gst,
      };
    });
  };

  const handleCheckOnShelf = () => {
    setNewProduct((prevEx) => {
      return {
        ...prevEx,
        onShelf: !newProduct.onShelf,
      };
    });
  };

  return (
    <div style={{ padding: '5% 1%' }}>
      <div>
        <h3>Add Product:</h3>
        <Form onSubmit={onSubmit} className="row">
          <Form.Group className="col-lg-1">
            <Form.Label>Title: </Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-lg-2">
            <Form.Label>Image: </Form.Label>
            <Form.Control
              required
              type="file"
              name="img"
              onChange={fileSelectedHandler}
            />
          </Form.Group>
          <Form.Group className="col-lg-1">
            <Form.Label>Page: </Form.Label>
            <select
              required
              name="page"
              value={newProduct.page}
              className="form-control"
              onChange={handleChange}
            >
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetables</option>
            </select>
          </Form.Group>
          <Form.Group className="col-lg-1">
            <Form.Label>Stock: </Form.Label>
            <Form.Control
              required
              value={newProduct.stock}
              type="number"
              name="stock"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-lg-1">
            <Form.Label>GST: </Form.Label>
            <Form.Control
              value={newProduct.gst}
              type="checkbox"
              name="gst"
              onChange={handleCheck}
            />
          </Form.Group>
          <Form.Group className="col-lg-1">
            <Form.Label>Price: </Form.Label>
            <Form.Control
              required
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-lg-1">
            <Form.Label>Company: </Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              name="company"
              value={newProduct.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-lg-2">
            <Form.Label>Info: </Form.Label>
            <Form.Control
              type="text"
              name="info"
              value={newProduct.info}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-lg-1">
            <Form.Label>onShelf: </Form.Label>
            <Form.Control
              value={newProduct.onShelf}
              type="checkbox"
              name="onShelf"
              onChange={handleCheckOnShelf}
            />
          </Form.Group>
          <div className="form-group col-lg-1">
            <Form.Label>Submit: </Form.Label>
            <input
              type="submit"
              value="Register"
              className="btn btn-primary form-control"
            />
          </div>
        </Form>
      </div>
      {context.products.map((item) => {
        if (item._id.toString() === productId.toString()) {
          return (
            <ProductEditItem key={item._id} item={item} onDetail={onDetail} />
          );
        } else {
          return <ProductItem key={item._id} item={item} onDetail={onDetail} />;
        }
      })}
    </div>
  );
}
export default ProductAdd;
