import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/Nav';
import 'font-awesome/css/font-awesome.min.css';
import Home from './HomePage/Home.js';
import Product from './Product/Product';
import Order from './Order/Order';
import AddNewProduct from './AddNewProduct/AddNewProduct.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users/Users';
import Admins from './Admins/Admins';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditProduct from './EditProduct/EditProduct';
import DetailOrder from './DetailOrder/DetailOrder';
import Login from './Login/Login';

// import ChildComponent from './Example/ChildComponent';
function App() {
  return (
    <Router>
      <div className="App-hoi-Phong">

        <header className="App-header">

          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/home" exact>
              <Nav />
              <Home />
            </Route>
            <Route path="/list-product">
              <Nav />
              <Product />
            </Route>
            <Route path="/order">
              <Nav />
              <Order />
            </Route>
            <Route path="/addnewproduct">
              <Nav />
              <AddNewProduct />
            </Route>
            <Route path="/edit-product">
              <Nav />
              <EditProduct></EditProduct>
            </Route>
            <Route path="/detail-order">
              <Nav />
              <DetailOrder></DetailOrder>
            </Route>
            <Route path="/all-users">
              <Nav />
              <Users></Users>
            </Route>
            <Route path="/all-admins">
              <Nav />
              <Admins />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    </Router>
  );
}

export default App;
