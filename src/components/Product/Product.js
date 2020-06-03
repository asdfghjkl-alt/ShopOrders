import React, { useContext } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context';
import PropTypes from 'prop-types';
import { AuthContext } from '../../auth-context';

function Product(props) {
  const { title, img, price, _id, stock } = props.product;
  const context = useContext(ProductContext);
  const auth = useContext(AuthContext);
  var x = process.env.REACT_APP_BACKEND_URL + 'products/' + img;
  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <Link to={'/details/' + _id.toString()}>
            <img
              src={x}
              alt="product"
              className="card-img-top"
              style={{ width: '9rem', height: '9rem' }}
            />
          </Link>
          {auth.isLoggedIn ? (
            <button
              onClick={() => {
                context.addToCart(props.product);
              }}
              className="cart-btn"
              style={{ borderRadius: '50%', width: '15%', height: '15%' }}
              disabled={stock <= 0 ? true : false}
            >
              +
            </button>
          ) : (
            <Link to="/signup">
              <button
                className="cart-btn"
                style={{ borderRadius: '50%', width: '15%', height: '15%' }}
              >
                +
              </button>
            </Link>
          )}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
