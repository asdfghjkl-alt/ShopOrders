import React from 'react';
import { Link } from 'react-router-dom';

function UserItem({ user, onDetail }) {
  const { admin, name, email, _id, phone, address } = user;

  return (
    <div className="row my-1">
      <div className="col-lg-1">
        <input
          type="checkbox"
          name="gst"
          className="form-control"
          disabled={true}
          checked={admin}
        />
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">name : </span>
        {name}
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">email : </span>
        {email}
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">phone : </span>
        {phone}
      </div>
      <div className="col-10 mx-auto col-lg-1">
        <span className="d-lg-none">address : </span>
        {address}
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
      <div className="col-10 mx-auto col-lg-1">
        <Link to={`/details/orders/${_id.toString()}`}>
          <button>
            <i
              className="fas fa-money-check-alt"
              style={{ color: 'green' }}
            ></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
