import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from './auth-context';
const ProductContext = React.createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const auth = useContext(AuthContext);

  const searchForData = useCallback(async () => {
    try {
      let resExs = await axios.get(
        process.env.REACT_APP_BACKEND_URL + 'products'
      );
      setProducts(resExs.data);
      if (auth.token) {
        resExs = await axios.get(process.env.REACT_APP_BACKEND_URL + 'orders', {
          headers: { Authorization: 'Bearer ' + auth.token },
        });
        setCart(resExs.data.cart);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [auth]);

  const updateStock = async (x, Booking) => {
    try {
      await axios.post(x, Booking);
    } catch (error) {
      console.log(error);
    }

    searchForData();
  };

  useEffect(() => {
    searchForData();
  }, [auth.login, auth.token, auth.isLoggedIn, searchForData]);

  async function addToCart(product) {
    if (auth.token) {
      let resExs = await axios.post(
        process.env.REACT_APP_BACKEND_URL + 'orders/' + product._id,
        '',
        {
          headers: { Authorization: 'Bearer ' + auth.token },
        }
      );

      resExs = await axios.get(process.env.REACT_APP_BACKEND_URL + 'orders', {
        headers: { Authorization: 'Bearer ' + auth.token },
      });

      setCart(resExs.data.cart);

      var x = 'http://localhost:5000/products/update/' + product._id;
      const Booking = {
        thing: 1,
      };
      updateStock(x, Booking);
    }
  }

  async function decrement(product) {
    if (auth.token) {
      try {
        let resExs = await axios.post(
          process.env.REACT_APP_BACKEND_URL + 'orders/decrease/' + product._id,
          '',
          {
            headers: { Authorization: 'Bearer ' + auth.token.toString() },
          }
        );

        resExs = await axios.get(process.env.REACT_APP_BACKEND_URL + 'orders', {
          headers: { Authorization: 'Bearer ' + auth.token },
        });

        setCart(resExs.data.cart);

        var x = 'http://localhost:5000/products/update/' + product._id;
        const Booking = {
          thing: -1,
        };
        updateStock(x, Booking);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function removeItem(product) {
    if (auth.token) {
      let resExs = await axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `orders/remove/${product._id.toString()}`,
        '',
        {
          headers: { Authorization: 'Bearer ' + auth.token },
        }
      );

      resExs = await axios.get(process.env.REACT_APP_BACKEND_URL + 'orders', {
        headers: { Authorization: 'Bearer ' + auth.token },
      });

      var x = 'http://localhost:5000/products/update/' + product._id;
      const Booking = {
        thing: product.quantity,
      };
      setCart(resExs.data.cart);
      updateStock(x, Booking);
    }
  }

  // function addTotals() {
  //   let subTotal = 0;
  //   cart.map((item) => {
  //     subTotal += item.quantity * item.price;
  //   });
  //   const tempTax = subTotal / 11;
  //   const tax = parseFloat(tempTax.toFixed(2));
  //   setCartSubTotal(subTotal);
  //   setCartTax(tax);
  //   setCartTotal(subTotal);
  // }

  return (
    <ProductContext.Provider
      value={{
        products: products,
        cart: cart,
        addToCart: addToCart,
        decrement: decrement,
        removeItem: removeItem,
        searchForData: searchForData,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

var ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
