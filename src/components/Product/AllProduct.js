import React, { useContext, useState } from 'react';
import Product from './Product';
import Title from '../Title';
import { ProductContext } from '../../context';

function ProductList() {
  const context = useContext(ProductContext);

  var products = context.products;

  products = products.filter((item) => item.onShelf === true);

  const [state, setState] = useState(products);

  const handleChange = (e) => {
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== '') {
      setState(products);
      // Assign the original list to currentList

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = products.filter((item) => {
        // change current item to lowercase
        const lc = item.title.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = products;
    }
    // Set the filtered state based on what our rules added to newList
    setState(newList);
  };

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="Search..."
          />
          <Title name="our" title={'Products'} />
          <div className="row">
            {state.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
