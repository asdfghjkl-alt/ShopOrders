import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbars from './components/Navbar';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from './components/ProtectedRoute';

const Details = React.lazy(() => import('./components/Details'));
const Cart = React.lazy(() => import('./components/Cart'));
const ProductAdd = React.lazy(() => import('./components/Product/ProductAdd'));
const ProductList = React.lazy(() =>
  import('./components/Product/ProductList')
);
const Login = React.lazy(() => import('./components/Login'));
const Signup = React.lazy(() => import('./components/Signup'));
const ProductAll = React.lazy(() => import('./components/Product/AllProduct'));

function App() {
  return (
    <Router>
      <Navbars />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact component={ProductAll} />
          <Route exact path="/details/:detailproduct" component={Details} />
          <ProtectedRoute exact path="/add" component={ProductAdd} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <RestrictedRoute exact path="/signup" component={Signup} />
          <RestrictedRoute exact path="/login" component={Login} />
          <Route
            exact
            path="/fruit"
            component={() => <ProductList value="fruit" />}
          />
          <Route
            exact
            path="/vegetables"
            component={() => <ProductList value="vegetable" />}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
