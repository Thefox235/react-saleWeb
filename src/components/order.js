import React, { useState, useEffect } from 'react';
import { getOrder, getOrderByIdUser } from '../api/server';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Order = () =>{
    const [orders, setOrder] = useState([]);
    const checkStatus = (a)=>{
        if(a===0){
            return "đang xử lý";
          }else 
          if(a===1) {
            return "đang giao hàng";
          }else 
          if(a===2) {
            return "đã giao hàng";
          }else 
          return "đã hủy";
        }
    useEffect(() => {
        const userData = sessionStorage.getItem('user');
        if (!userData) {
          alert('Bạn chưa đăng nhập');
          return;
        }
    
        const user = JSON.parse(userData);
        const fetchOrders = async () => {
          try {
            const response = await getOrderByIdUser(user._id);
            console.log(response);
            setOrder(response);
          } catch (error) {
            console.error('Có lỗi xảy ra khi lấy sản phẩm:', error);
          }
        };
    
        fetchOrders();
      }, []);
    return(
        <>
  {/* Topbar Start */}
  <div className="container-fluid">
    <div className="row bg-secondary py-1 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center h-100">
          <a className="text-body mr-3" href="">
            About
          </a>
          <a className="text-body mr-3" href="">
            Contact
          </a>
          <a className="text-body mr-3" href="">
            Help
          </a>
          <a className="text-body mr-3" href="">
            FAQs
          </a>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              My Account
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              href="login.html"
            >
              <Link className="dropdown-item" type="button" to="/login">
                Dăng Nhập
              </Link>
              <Link className="dropdown-item" type="button" to="/login">
                Đăng Ký
              </Link>
            </div>
          </div>
        </div>
        <div className="d-inline-flex align-items-center d-block d-lg-none">
          <a href="" className="btn px-0 ml-2">
            <i className="fas fa-heart text-dark" />
            <span
              className="badge text-dark border border-dark rounded-circle"
              style={{ paddingBottom: 2 }}
            >
              0
            </span>
          </a>
          <a href="" className="btn px-0 ml-2">
            <i className="fas fa-shopping-cart text-dark" />
            <span
              className="badge text-dark border border-dark rounded-circle"
              style={{ paddingBottom: 2 }}
            >
              0
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
      <div className="col-lg-4">
        <a href="" className="text-decoration-none">
          <span className="h1 text-uppercase text-primary bg-dark px-2">
            Key
          </span>
          <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
            Gear
          </span>
        </a>
      </div>
      <div className="col-lg-4 col-6 text-left">
        <form action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products"
            />
            <div className="input-group-append">
              <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-4 col-6 text-right">
        <p className="m-0">Dịch vụ hổ trợ/p&gt;</p>
        <h5 className="m-0">+012 345 6789</h5>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid bg-dark mb-30">
    <div className="row px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a
          className="btn d-flex align-items-center justify-content-between bg-primary w-100"
          data-toggle="collapse"
          href="#navbar-vertical"
          style={{ height: 65, padding: "0 30px" }}
        >
          <h6 className="text-dark m-0">
            <i className="fa fa-bars mr-2" />
            Danh Mục
          </h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav
          className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
          id="navbar-vertical"
          style={{ width: "calc(100% - 30px)", zIndex: 999 }}
        >
          <div className="navbar-nav w-100">
            <a href="sptheonhasx.html?id=1" className="nav-item nav-link">
              Asus
            </a>
            <a href="sptheonhasx.html?id=2" className="nav-item nav-link">
              Acer
            </a>
            <a href="sptheonhasx.html?id=3" className="nav-item nav-link">
              Lenovo
            </a>
            <a href="sptheonhasx.html?id=4" className="nav-item nav-link">
              MSI
            </a>
            <a href="sptheonhasx.html?id=5" className="nav-item nav-link">
              HP
            </a>
            <a href="sptheonhasx.html?id=6" className="nav-item nav-link">
              Dell
            </a>
            <a href="sptheonhasx.html?id=7" className="nav-item nav-link">
              Apple
            </a>
            <a href="sptheonhasx.html?id=12" className="nav-item nav-link">
              Itel
            </a>
            <a href="sptheonhasx.html?id=10" className="nav-item nav-link">
              LG
            </a>
          </div>
        </nav>
      </div>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
          <a href="" className="text-decoration-none d-block d-lg-none">
            <span className="h1 text-uppercase text-dark bg-light px-2">
              Multi
            </span>
            <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
              Shop
            </span>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <Link to="/home" className="nav-item nav-link active">
                Home
              </Link>
              <a href="shop.html" className="nav-item nav-link">
                Shop
              </a>
              <a href="detail.html" className="nav-item nav-link">
                Shop Detail
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages <i className="fa fa-angle-down mt-1" />
                </a>
                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <a href="cart.html" className="dropdown-item">
                    Shopping Cart
                  </a>
                  <a href="checkout.html" className="dropdown-item">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
              <a href="" className="btn px-0">
                <i className="fas fa-heart text-primary" />
                <span
                  className="badge text-secondary border border-secondary rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </a>
              <a href="" className="btn px-0 ml-3">
                <i className="fas fa-shopping-cart text-primary" />
                <span
                  className="badge text-secondary border border-secondary rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
  {/* Breadcrumb Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
          <a className="breadcrumb-item text-dark" href="#">
            Home
          </a>
          <a className="breadcrumb-item text-dark" href="#">
            Shop
          </a>
          <span className="breadcrumb-item active">Đơn hàng</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Cart Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-light table-borderless table-hover text-center mb-0">
          <thead className="thead-dark">
            <tr>
              <th>Products</th>
              <th>Images</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="align-middle">
          {orders.map(sp => (
                    <tr key={sp._id}>
              <td className="align-middle">
                <img src="" alt="" style={{ width: 50 }} />
                {sp.name}
              </td>
              <td className="align-middle">
                <img src={sp.img} alt="" style={{ width: 100 }} />
              </td>
              <td className="align-middle">
                {sp.price.toLocaleString("vn")}VNĐ
              </td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary border-0 text-center"
                    defaultValue={sp.quantity}
                  />
                </div>
              </td>
              <td className="align-middle">
                {(sp.price*sp.quantity).toLocaleString("vn")}VNĐ
              </td>
              <td className="align-middle">
                {checkStatus(sp.status)}
              </td>
            </tr>
                              ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-4">
        <div className="bg-light p-30 mb-5"></div>
      </div>
    </div>
  </div>
  {/* Cart End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
    <div className="row px-xl-5 pt-5">
      <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
        <p className="mb-4">
          No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et
          dolor sed dolor. Rebum tempor no vero est magna amet no
        </p>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt text-primary mr-3" />
          123 Street, New York, USA
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope text-primary mr-3" />
        </p>
        <p className="mb-0">
          <i className="fa fa-phone-alt text-primary mr-3" />
          +012 345 67890
        </p>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Shop
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Shop Detail
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Shopping Cart
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Checkout
              </a>
              <a className="text-secondary" href="#">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Shop
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Shop Detail
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Shopping Cart
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Checkout
              </a>
              <a className="text-secondary" href="#">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </div>
            </form>
            <h6 className="text-secondary text-uppercase mt-4 mb-3">
              Follow Us
            </h6>
            <div className="d-flex">
              <a className="btn btn-primary btn-square mr-2" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-primary btn-square mr-2" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-primary btn-square mr-2" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-primary btn-square" href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="row border-top mx-xl-5 py-4"
      style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
    >
      <div className="col-md-6 px-xl-0">
        <p className="mb-md-0 text-center text-md-left text-secondary">
          ©{" "}
          <a className="text-primary" href="#">
            Domain
          </a>
          . All Rights Reserved. Designed by
          <a className="text-primary" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
      <div className="col-md-6 px-xl-0 text-center text-md-right">
        <img className="img-fluid" src="img/payments.png" alt="" />
      </div>
    </div>
  </div>
  {/* Footer End */}
</>

    )
}

export default Order;