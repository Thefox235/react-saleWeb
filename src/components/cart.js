import React from 'react';
import { useCart } from './context/cartContext';
import { Link } from 'react-router-dom';

const Cart = ()=>{
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, checkout } = useCart();


        const handleCheckout = () => {
          const userData = sessionStorage.getItem('user');
          if (!userData) {
            alert('Bạn cần đăng nhập để thực hiện thanh toán.');
            // Hoặc chuyển hướng đến trang đăng nhập
            // window.location.href = '/login';
            return;
          }
        
          const user = JSON.parse(userData);

          const userId = user._id;
          checkout(userId);
          alert('thanh toán thành công');
        };
        
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
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                Sign in
              </button>
              <button className="dropdown-item" type="button">
                Sign up
              </button>
            </div>
          </div>
          <div className="btn-group mx-2">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              VND
            </button>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              VN
            </button>
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
        <p className="m-0">Customer Service</p>
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
            Categories
          </h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav
          className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
          id="navbar-vertical"
          style={{ width: "calc(100% - 30px)", zIndex: 999 }}
        >
          <div className="navbar-nav w-100">
            <div className="nav-item dropdown dropright">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Dresses <i className="fa fa-angle-right float-right mt-1" />
              </a>
              <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href="" className="dropdown-item">
                  Men's Dresses
                </a>
                <a href="" className="dropdown-item">
                  Women's Dresses
                </a>
                <a href="" className="dropdown-item">
                  Baby's Dresses
                </a>
              </div>
            </div>
            <a href="" className="nav-item nav-link">
              Shirts
            </a>
            <a href="" className="nav-item nav-link">
              Jeans
            </a>
            <a href="" className="nav-item nav-link">
              Swimwear
            </a>
            <a href="" className="nav-item nav-link">
              Sleepwear
            </a>
            <a href="" className="nav-item nav-link">
              Sportswear
            </a>
            <a href="" className="nav-item nav-link">
              Jumpsuits
            </a>
            <a href="" className="nav-item nav-link">
              Blazers
            </a>
            <a href="" className="nav-item nav-link">
              Jackets
            </a>
            <a href="" className="nav-item nav-link">
              Shoes
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
              <Link to="/home" className="nav-item nav-link">
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
                  className="nav-link dropdown-toggle active"
                  data-toggle="dropdown"
                >
                  Pages <i className="fa fa-angle-down mt-1" />
                </a>
                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <a href="cart.html" className="dropdown-item active">
                    Shopping Cart
                  </a>
                  <a href="checkout.html" className="dropdown-item">
                    Checkout
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
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
          <span className="breadcrumb-item active">Shopping Cart</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Cart Start */}
  {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
  <div className="container-fluid">
    <div className="row px-xl-5">
        
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-light table-borderless table-hover text-center mb-0">
          <thead className="thead-dark">
            <tr>
              <th>Products</th>
              <th>Imgaes</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
          {cart.map((item) => (

            <tr key={item._id}>
              <td className="align-middle">
                <img
                  src=""
                  alt=""
                  style={{ width: 50 }}
                />
                {item.name}
              </td>
              <td className="align-middle">
                <img
                  src={item.img}
                  alt=""
                  style={{ width: 100 }}
                />
              </td>
              <td className="align-middle">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button onClick={() => decreaseQuantity(item._id)} className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary border-0 text-center"
                    value ={item.cartQuantity}
                  />
                  <div className="input-group-btn">
                    <button onClick={() => increaseQuantity(item._id)} className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">{(item.price * item.cartQuantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
              <td className="align-middle">
                <button onClick={() => removeFromCart(item._id)} className="btn btn-sm btn-danger">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-4">
        <form className="mb-30" action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 p-4"
              placeholder="Coupon Code"
            />
            <div className="input-group-append">
              <button className="btn btn-primary">Apply Coupon</button>
            </div>
          </div>
        </form>
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Cart Summary</span>
        </h5>
        <div className="bg-light p-30 mb-5">
          <div className="border-bottom pb-2">
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">25,000 VNĐ</h6>
            </div>
          </div>
          <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>{(cart.reduce((total, item) => total + item.price * item.cartQuantity, 0) + 25000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </h5>
            </div>
            <button onClick={handleCheckout} className="btn btn-block btn-primary font-weight-bold my-3 py-3">
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
        )}
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
          info@example.com
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
  {/* Back to Top */}
  <a href="#" className="btn btn-primary back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</>
    )
}

export default Cart;