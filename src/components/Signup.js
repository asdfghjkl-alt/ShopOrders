import React, { Fragment, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../auth-context';

const Login = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password, name } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await axios.post(
        process.env.REACT_APP_BACKEND_URL + 'users/signup',
        formData
      );
      auth.login(responseData.data.userId, responseData.data.token);
      history.push('/');
    } catch (err) {}
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Sign up!</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign Up
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Signup" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
