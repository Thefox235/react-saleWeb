
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';
import AuthForm from './components/login';
import ViewPro from './components/admin/viewPro';
import PrivateRoute from './components/PrivateRoute';
import CreatePro from './components/admin/createPro';
import CreateCate from './components/admin/createCate';
import CreateBrand from './components/admin/createBrand';
import EditPro from './components/admin/editPro';
import EditCate from './components/admin/editCate';
import ViewCate from './components/admin/viewCate';
import ViewBrand from './components/admin/viewBrand';
import EditBrand from './components/admin/editBrand';
import Cart from './components/cart';
import ViewOrder from './components/admin/viewOrder';
import Order from './components/order';
import Logout from './components/logout';
function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/editSp/:id" element={<EditPro />} />
            <Route path="/editCate/:id" element={<EditCate />} />
            <Route path="/editBrand/:id" element={<EditBrand />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="/createPro" element={<CreatePro />} />
            <Route path="/createCate" element={<CreateCate />} />
            <Route path="/createBrand" element={<CreateBrand />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/viewOrder" element={<ViewOrder />} />
            <Route path="/viewPro" element={<PrivateRoute element={ViewPro} roles={['1']} />} />
            <Route path="/viewCate" element={<PrivateRoute element={ViewCate} roles={['1']} />} />
            <Route path="/viewBrand" element={<PrivateRoute element={ViewBrand} roles={['1']} />} />
            <Route path="/viewPro" element={<ViewPro />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
