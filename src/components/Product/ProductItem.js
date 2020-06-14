import React from 'react';

function ProductItem({ item, onDetail }) {
  const {
    title,
    img,
    price,
    stock,
    info,
    _id,
    company,
    page,
    gst,
    onShelf,
  } = item;
  var x = process.env.REACT_APP_BACKEND_URL + 'products/' + img;
  return (
    <div className="row my-1 text-capitalize">
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
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">stock : </span>
        {stock}
      </div>
      {/* <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">gst : </span>
        {gst ? <p>true</p> : <p>false</p>}
      </div> */}
      <div className="col-lg-1">
        <input
          type="checkbox"
          name="gst"
          className="form-control"
          disabled={true}
          checked={gst}
        />
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">company : </span>
        {company}
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">info : </span>
        {info}
      </div>
      <div className="col-lg-2">
        <input
          type="checkbox"
          name="onShelf"
          className="form-control"
          disabled={true}
          checked={onShelf}
        />
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <button
          onClick={() => {
            onDetail(_id.toString());
          }}
        >
          <i className="fas fa-edit"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
