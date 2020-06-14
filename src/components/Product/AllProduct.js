import React, { useContext, useState, useEffect, useCallback } from 'react';
import Product from './Product';
import Title from '../Title';
import { ProductContext } from '../../context';
import './SideNav.css';

function ProductList() {
  const context = useContext(ProductContext);

  var products = context.products;

  products = products.filter((item) => item.onShelf === true);

  const [state, setState] = useState(products);
  const [brands, setBrands] = useState([]);
  const [tempBrands, setTempBrands] = useState([]);

  const fetchData = useCallback(() => {
    let newList = [];
    products.forEach((item) => {
      newList.push(item.company);
    });
    let x = (names) => names.filter((v, i) => names.indexOf(v) === i);
    newList = x(newList);
    setBrands(newList);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e) => {
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== '') {
      newList = state.filter((item) => {
        // change current item to lowercase
        const lc = item.title.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lxowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
      setState(newList);
    } else {
      if (tempBrands.length !== 0) {
        products.forEach((product) => {
          if (tempBrands.includes(product.company)) {
            newList.push(product);
          }
        });

        setState(newList);
      } else {
        setState(products);
      }
    }
    // Set the filtered state based on what our rules added to newList
  };

  const handleChangeCheck = (item) => {
    let newList = [];

    if (tempBrands.includes(item)) {
      const index = tempBrands.indexOf(item);
      let x = tempBrands;
      x = x.filter(function (value, ind, arr) {
        return ind !== index;
      });
      setTempBrands(x);

      products.forEach((product) => {
        if (tempBrands.includes(product.company)) {
          newList.push(product);
        }
      });
      setState(newList);

      if (x.length === 0) {
        setState(products);
      }
    } else {
      const x = tempBrands;
      x.push(item);
      setTempBrands(x);

      products.forEach((product) => {
        if (tempBrands.includes(product.company)) {
          newList.push(product);
        }
      });
      setState(newList);
    }
  };

  return (
    <React.Fragment>
      <div className="py-5 row">
        <div className="sidenav row col-lg-2" style={{ paddingTop: '10%' }}>
          {brands.map((item) => {
            return (
              <React.Fragment key={item}>
                <input
                  type="checkbox"
                  name="onShelf"
                  className="col-lg-2"
                  onChange={() => {
                    handleChangeCheck(item);
                  }}
                />
                <label className="form-label col-lg-10">{item}</label>
              </React.Fragment>
            );
          })}
        </div>
        <div className="container col-lg-7">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Search..."
          />
          <Title name="our" title={'Products'} />
          <div className="row">
            {brands.length === 0
              ? products.map((product) => {
                  return <Product key={product._id} product={product} />;
                })
              : state.map((product) => {
                  return <Product key={product._id} product={product} />;
                })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
