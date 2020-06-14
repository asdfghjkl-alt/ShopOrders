import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbars from './components/Navbar';
import RestrictedRoute from './components/Routes/RestrictedRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import ProtectedRoute from './components/Routes/ProtectedRoute';

const Details = React.lazy(() => import('./components/Details'));
const Cart = React.lazy(() => import('./components/Cart'));
const ProductAdd = React.lazy(() => import('./components/Product/ProductAdd'));
const ProductList = React.lazy(() =>
  import('./components/Product/ProductList')
);
const Login = React.lazy(() => import('./components/User/Login'));
const Signup = React.lazy(() => import('./components/User/Signup'));
const ProductAll = React.lazy(() => import('./components/Product/AllProduct'));
const UserAll = React.lazy(() => import('./components/User/Users'));
const UserEdit = React.lazy(() => import('./components/User/AboutUser'));
const Pay = React.lazy(() => import('./components/Cart/Pay'));
const GetOrders = React.lazy(() => import('./components/Orders/GetOrders'));

function App() {
  return (
    <Router>
      <Navbars />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact component={ProductAll} />
          <Route exact path="/details/:detailproduct" component={Details} />
          <ProtectedRoute exact path="/add" component={ProductAdd} />
          <ProtectedRoute exact path="/users" component={UserAll} />
          <Route exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/pay" component={Pay} />
          <PrivateRoute exact path="/useredit" component={UserEdit} />
          <PrivateRoute exact path="/getorders" component={GetOrders} />
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
