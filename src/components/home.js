import '../asset/css/style.css';
import '../asset/lib/owlcarousel/assets/owl.carousel.min.css';
import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/server';
import { getCategory } from '../api/server';
import { getProductByView } from '../api/server';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useCart } from './context/cartContext';
import Logout from './logout';
const Home = () =>{
    const [products, setProducts] = useState([]);
    const [productViews, setProductViews] = useState([]);
    const [categories, setCategories] = useState([]);
    const { addToCart } = useCart();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

      const userData = sessionStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
      // console.log(userData);
      // const user = JSON.parse(userData);
      // console.log(user.email);

      const fetchProducts = async () => {
        try {
          const response = await getProducts();
          console.log(response);
          setProducts(response);
        } catch (error) {
          console.error('Có lỗi xảy ra khi lấy sản phẩm:', error);
        }
      };
  
      fetchProducts();
      const fetchCategories = async () => {
          try {
            const response = await getCategory();
            // console.log(response);
            setCategories(response); // Đảm bảo rằng response.products là một mảng
          } catch (error) {
            console.error('Có lỗi xảy ra khi lấy danh mục:', error);
          }
      };
      fetchCategories();
      const fetchProductView = async () => {
        try {
          const response = await getProductByView();
          // console.log(response);
          setProductViews(response); // Đảm bảo rằng response.products là một mảng
        } catch (error) {
          console.error('Có lỗi xảy ra khi lấy danh mục:', error);
        }
    };
    fetchProductView();
    }, []);
    
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/login'); // Chuyển hướng đến trang đăng nhập
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
          {user ? user.name : 'My Account'}
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          {user ? (
            <>
              <Link className="dropdown-item" type="button" to={`/profile`}>
                Profile
              </Link>
              <button onClick={handleLogout} className="dropdown-item" type="button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="dropdown-item" type="button" to={`/login`}>
                Đăng Nhập
              </Link>
              <Link className="dropdown-item" type="button" to={`/register`}>
                Đăng Ký
              </Link>
            </>
          )}
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
          <Link to="/cart" className="btn px-0 ml-2">
            <i className="fas fa-shopping-cart text-dark" />
            <span
              className="badge text-dark border border-dark rounded-circle"
              style={{ paddingBottom: 2 }}
            >
              0
            </span>
          </Link>
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
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="shop.html" className="nav-item nav-link">
                Shop
              </a>
              <a href="detail.html" className="nav-item nav-link">
                Shop Detail
              </a>
              <Link to="/order" className="nav-item nav-link">
                Order
              </Link>
              {user && user.role === "1" && (
              <Link to="/viewPro" className="nav-item nav-link">
              Admin
              </Link>
              )}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages <i className="fa fa-angle-down mt-1" />
                </a>
                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <Link href="/cart" className="dropdown-item">
                    Shopping Cart
                  </Link>
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
              <Link to="/cart" className="btn px-0 ml-3">
                <i className="fas fa-shopping-cart text-primary" />
                <span
                  className="badge text-secondary border border-secondary rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  3
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
  {/* Carousel Start */}
  <div className="container-fluid mb-3">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade mb-30 mb-lg-0"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div
              className="carousel-item position-relative active"
              style={{ height: 450 }}
            >
              <img
                className="position-relative w-100 h-100"
                src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/slider_1.jpg?1715097532304"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <a
                    className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: 430 }}
            >
              <img
                className="position-relative w-100 h-100"
                src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/slider_3.jpg?1715097532304"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown" />
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn" />
                  <a
                    className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: 430 }}
            >
              <img
                className="position-relative w-100 h-100"
                src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/slider_4.jpg?1715097532304"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown" />
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn" />
                  <a
                    className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-offer mb-30" style={{ height: 200}}>
          <img
            className="img-fluid"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/7-1714839205316.png?v=1714839407817"
            alt=""
            style={{ position: 'relative' }}
          />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href="" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        </div>
        <div className="product-offer mb-30" style={{ height: 200 }}>
          <img
            className="img-fluid"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1715924917634.png?v=1715924924880"
            alt=""
            style={{ position: 'relative' }}
          />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href="" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Featured Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Sản phẩm chất lượng</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Đổi trả trong 14 ngày</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Hổ trợ 24/7</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Featured End */}
  {/* Categories Start */}
  <div className="container-fluid pt-5">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Categories</span>
    </h2>
    <div className="row px-xl-5 pb-3">
    {Array.isArray(categories) ? (
        <>
          {categories.map(cate => (
         
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a className="text-decoration-none" href="">
                <div className="cat-item d-flex align-items-center mb-4">
                    <div
                    className="overflow-hidden"
                    style={{ width: 100, height: 100 }}
                    >
                    <img
                        className="img-fluid"
                        src={cate.img}
                        alt={cate.name}
                    />
                    </div>
                    <div className="flex-fill pl-3">
                    <h6 key={cate.id}>{cate.name}</h6>
                    <small className="text-body">100 Products</small>
                    </div>
                </div>
                </a>
            </div>
       ))}
       </>
     ) : (
       <p>Không có sản phẩm nào để hiển thị.</p>
     )}
      {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src="https://www.shutterstock.com/image-vector/symbol-depicting-keyboard-key-cap-260nw-1463077487.jpg"
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>MODS BÀN PHÍM CƠ</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>CHUỘT</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src="https://ezpc.vn/media/news/0709_kc1.jpg"
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>ARTISAN KEYCAP</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Keyboard-icon_Wikipedians.svg/1200px-Keyboard-icon_Wikipedians.svg.png"
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>BÀN PHÍM CƠ</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src="https://img.freepik.com/premium-vector/mechanical-keyboard-switch-icon-design-illustration_688722-406.jpg"
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>SWITCH​</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-flat-pin-image_1127802.jpg"
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>PHỤ KIỆN</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img
                className="img-fluid"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="flex-fill pl-3">
              <h6>Pre-Oder</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div> */}
    </div>
  </div>
  {/* Categories End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Sản phẩm nỗi bật</span>
    </h2>
    <div className="row px-xl-5">

    {Array.isArray(productViews) ? (
        <>
          {productViews.map(product => (

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src={product.img}
              alt={product.name}
            />
            <div className="product-action">
              <a onClick={() => addToCart(product)} className="btn btn-outline-dark btn-square" >
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <Link
              className="h6 text-decoration-none text-truncate"
              to={`/product/${product._id}`}
            >
                {product.name}
            </Link>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    ))}
      </>
      ) : (
        <p>Không có sản phẩm nào để hiển thị.</p>
      )}

      {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/31-1702459953458.png?v=1702460053077"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              RAINY75 - BÀN PHÍM CƠ KHUNG NHÔM
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>2,100,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4802103159171-fc4734c7504e9ef3fc1a864d6bd220d3-1697801179167.jpg?v=1697801947993"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ MONSGEEK M3W
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>2,000,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1708789548732.png?v=1708789553553"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              INFI75 LITE - BÀN PHÍM CƠ CUSTOM
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>1,190,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/2-1708088957314.png?v=1708088965780"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ AULA F75
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>1,000,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/2-1705557303366.png?v=1705557308893"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ KIT GMK81
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>980,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/2-1701064230192.png?v=1701064236997"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ MONSGEEK M1
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/7-1701677109725.png?v=1701677120343"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ XINMENG M87 PRO
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>950,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  {/* Products End */}
  {/* Offer Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="row px-xl-5">
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{ height: 300 }}>
          <img
            className="img-fluid"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/2-1705557303366.png?v=1705557308893"
            alt=""
            style={{ position: 'relative' }}
          />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href="" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{ height: 300 }}>
          <img
            className="img-fluid"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/5-1696421592888.png?v=1696421602237"
            alt=""
            style={{ position: 'relative' }}
          />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href="" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Offer End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Sản phẩm mới nhất</span>
    </h2>
    <div className="row px-xl-5">
    {Array.isArray(products) ? (
        <>
          {products.map(product => (

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src={product.img}
              alt={product.name}
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <Link
              className="h6 text-decoration-none text-truncate"
              to={`/product/${product._id}`}
            >
                {product.name}
            </Link>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    ))}
      </>
      ) : (
        <p>Không có sản phẩm nào để hiển thị.</p>
      )}
      {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/2-1701064230192.png?v=1701064236997"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ MONSGEEK M1
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/2-1705557303366.png?v=1705557308893"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ KIT GMK81
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>980,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/2-1708088957314.png?v=1708088965780"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ AULA F75
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>1,000,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/1-1708789548732.png?v=1708789553553"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              INFI75 LITE - BÀN PHÍM CƠ CUSTOM
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>1,190,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/z4802103159171-fc4734c7504e9ef3fc1a864d6bd220d3-1697801179167.jpg?v=1697801947993"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ MONSGEEK M3W
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>2,000,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/31-1702459953458.png?v=1702460053077"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              RAINY75 - BÀN PHÍM CƠ KHUNG NHÔM
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>2,100,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/436/596/products/9-1710776206799.png?v=1710776216383"
              alt=""
            />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a
              className="h6 text-decoration-none text-truncate"
              href="detail.html"
            >
              BÀN PHÍM CƠ XINMENG M75 PRO
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>1,200,000 VNĐ</h5>
              <h6 className="text-muted ml-2" />
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  {/* Products End */}
  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel vendor-carousel">
          <div className="bg-light p-4">
            <img src="img/vendor-1.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-2.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-3.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-4.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-5.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-6.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-7.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-8.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}
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

export default Home;