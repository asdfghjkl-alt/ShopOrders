import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context';
import { Link } from 'react-router-dom';
import './Button.css';
import { AuthContext } from '../auth-context';
import axios from 'axios';

function Details() {
  const context = useContext(ProductContext);
  const auth = useContext(AuthContext);
  const params = useParams();

  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    const get = async () => {
      const detailId = params.detailproduct;
      let resExs = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `products/${detailId.toString()}`
      );

      setDetailProduct(resExs.data.product);
    };
    get();
  }, [auth.token, auth.login, params.detailproduct]);

  var x = process.env.REACT_APP_BACKEND_URL + 'products/' + detailProduct.img;
  return (
    <div className="container py-5">
      <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
        <h1>{detailProduct.title}</h1>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={x} className="img-fluid" alt="product"></img>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model : {detailProduct.title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by :{' '}
              <span className="text-uppercase">{detailProduct.company}</span>
            </h4>
            <h4>
              <strong>
                price : <span>$</span> {detailProduct.price}
              </strong>
            </h4>
          </div>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product:
          </p>
          <p className="text-muted lead">{detailProduct.info}</p>
          <div>
            <Link to="/">
              <button className="button">Go to shop</button>
            </Link>
            {auth.token && (
              <button
                cart
                className="transparent-button button"
                onClick={() => {
                  context.addToCart(detailProduct);
                }}
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
