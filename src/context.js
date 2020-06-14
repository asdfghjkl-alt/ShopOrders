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
      let localData = localStorage.getItem('cart');
      localData = JSON.parse(localData);
      if (!localData) {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
      } else if (localData.length > 0) {
        setCart(localData);
        localStorage.setItem('cart', JSON.stringify(localData));
      } else {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateStock = async (Booking, id) => {
    try {
      await axios.post(
        process.env.REACT_APP_BACKEND_URL + '/products/update/' + id.toString(),
        Booking
      );
    } catch (error) {
      console.log(error);
    }

    searchForData();
  };

  useEffect(() => {
    searchForData();
  }, [auth.login, auth.token, auth.isLoggedIn, searchForData, cart]);

  async function addToCart(product) {
    let localData = localStorage.getItem('cart');
    localData = JSON.parse(localData);

    const updatedItemIndex = localData.findIndex((item) => {
      return item.productId._id.toString() === product._id.toString();
    });

    if (updatedItemIndex < 0 || localData.length === 0) {
      localData.push({ productId: product, quantity: 1 });
    } else {
      const updatedItem = localData[updatedItemIndex];

      updatedItem.quantity += 1;

      localData[updatedItemIndex] = updatedItem;
    }

    localStorage.setItem('cart', JSON.stringify(localData));

    setCart(localData);

    // var x = 'http://localhost:5000/products/update/' + product._id;
    // const Booking = {
    //   thing: 1,
    // };
    // updateStock(x, Booking);
  }

  async function decrement(product) {
    let localData = localStorage.getItem('cart');
    localData = JSON.parse(localData);

    const updatedItemIndex = localData.findIndex((item) => {
      return item.productId._id.toString() === product._id.toString();
    });

    if (updatedItemIndex > -1) {
      const updatedItem = localData[updatedItemIndex];

      updatedItem.quantity -= 1;

      localData[updatedItemIndex] = updatedItem;

      if (updatedItem.quantity === 0) {
        localData.splice(updatedItemIndex, 1);
      }

      localStorage.setItem('cart', JSON.stringify(localData));
    }

    setCart([...localData]);
  }

  async function removeItem(product) {
    let localData = localStorage.getItem('cart');
    localData = JSON.parse(localData);

    const updatedItemIndex = localData.findIndex((item) => {
      return item.productId._id.toString() === product._id.toString();
    });

    localData.splice(updatedItemIndex, 1);

    localStorage.setItem('cart', JSON.stringify(localData));

    setCart([...localData]);
  }

  async function removeAll() {
    localStorage.setItem('cart', JSON.stringify([]));

    setCart([]);
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
        removeAll: removeAll,
        updateStock: updateStock,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

var ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
