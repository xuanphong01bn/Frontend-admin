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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditProduct from './EditProduct/EditProduct';
import DetailOrder from './DetailOrder/DetailOrder';

// import ChildComponent from './Example/ChildComponent';
function App() {
  return (
    <Router>
      <div className="App-hoi-Phong">
        <Nav />
        <header className="App-header">

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/list-product">
              <Product />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/addnewproduct">
              <AddNewProduct />
            </Route>
            <Route path="/edit-product">
              <EditProduct></EditProduct>
            </Route>
            <Route path="/detail-order">
              <DetailOrder></DetailOrder>
            </Route>
            <Route path="/all-users">
              <Users></Users>
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
