import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/server';
import { getProductByCate } from '../api/server';
import { Link } from 'react-router-dom';
import { useCart } from './context/cartContext';

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [productCate, setProductCate] = useState([]);
    const { addToCart } = useCart();

    console.log(product.catagory);
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const data = await getProductById(id);
          console.log('Fetched product:', data); // Kiểm tra dữ liệu nhận được
          setProduct(data);
        } catch (error) {
          console.error('Có lỗi xảy ra khi lấy chi tiết sản phẩm:', error);
        }
      };
  
      fetchProduct();
    }, [id]);
    // useEffect để kiểm tra giá trị của product ngay sau khi nó được gán vào state
    useEffect(() => {
      console.log('Product state updated:', product);
    }, [product]);
    const idCate = product.catagory ? product.catagory.catagoryId : 'N/A';
    // console.log(idCate);
    useEffect(() => {
      const fetchProductCate = async () => {
        try {
          const data = await getProductByCate(idCate);
          setProductCate(data);
        } catch (error) {
          console.error('Có lỗi xảy ra khi lấy chi tiết sản phẩm:', error);
        }
      };
    
      if (idCate !== 'N/A') {
        fetchProductCate();
      }
    }, [idCate]);

    // Kiểm tra nếu product là một object rỗng
    if (!product) {
      return <p>Loading...</p>;
    }
console.log(productCate);

    const formattedPrice = product.price ? product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'N/A';
    return (
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
              <a className="dropdown-item" type="button" href="/user/login">
                Dăng Nhập
              </a>
              <a className="dropdown-item" type="button" href="/user/login">
                Đăng Ký
              </a>
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
              <Link to={`/`} className="nav-item nav-link active">
                Home
              </Link>
              <a href="shop.html" className="nav-item nav-link">
                Shop
              </a>
              <a href="detail.html" className="nav-item nav-link">
                Shop Detail
              </a>
              <a href="/user/order" className="nav-item nav-link">
                Order
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
          <span className="breadcrumb-item active">Shop Detail</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Shop Detail Start */}
  <div className="container-fluid pb-5">
    <div className="row px-xl-5">
      <div className="col-lg-5 mb-30">
        <div
          id="product-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner bg-light">
            <div className="carousel-item active">
              <img
                className="w-100 h-100"
                src={product.img}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 h-auto mb-30">
        <div className="h-100 bg-light p-30">
          <h3>{product.name}</h3>
          <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star-half-alt" />
              <small className="far fa-star" />
            </div>
            <small className="pt-1">(99 Reviews)</small>
          </div>
          <h3 className="font-weight-semi-bold mb-4">{formattedPrice}</h3>
          <p className="mb-4">
            {product.description}
          </p>
          {/* <div className="d-flex mb-3">
            <strong className="text-dark mr-3">Sizes:</strong>
          </div>
          <div className="d-flex mb-4">
            <strong className="text-dark mr-3">Colors:</strong>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-1"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-1">
                  Black
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-2"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-2">
                  White
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-3"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-3">
                  Red
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-4"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-4">
                  Blue
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-5"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-5">
                  Green
                </label>
              </div>
            </form>
          </div> */}
          <div className="d-flex align-items-center mb-4 pt-2">
            <div className="input-group quantity mr-3" style={{ width: 130 }}>
              <div className="input-group-btn">
                <button className="btn btn-primary btn-minus">
                  <i className="fa fa-minus" />
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary border-0 text-center"
                defaultValue={1}
              />
              <div className="input-group-btn">
                <button className="btn btn-primary btn-plus">
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <button className="btn btn-primary px-3" onClick={() => addToCart(product)}>
              <i className="fa fa-shopping-cart mr-1" /> Add To Cart
            </button>
          </div>
          <div className="d-flex pt-2">
            <strong className="text-dark mr-2">Share on:</strong>
            <div className="d-inline-flex">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row px-xl-5">
      <div className="col">
        <div className="bg-light p-30">
          <div className="nav nav-tabs mb-4">
            <a
              className="nav-item nav-link text-dark active"
              data-toggle="tab"
              href="#tab-pane-1"
            >
              Description
            </a>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-pane-1">
              <h4 className="mb-3">Product Description</h4>
              <p>
                Sản phẩm này là bàn phím của hãng AULA, với layout từ 80-81
                phím. Bàn phím có thể kết nối qua USB type C, Bluetooth hoặc
                Wireless 2.4G. Nó được trang bị đèn LED RGB, với plate được làm
                từ PC. Bàn phím sử dụng pin 5000mAh, mạch xuôi, và hỗ trợ
                hotswap 5 pin. Đặc biệt, sản phẩm có lót sẵn 5 lớp foam, sử dụng
                stab plate mount và kiểu mount là gasket mount. Trọng lượng của
                bàn phím là 0.8kg. Đây chắc chắn là một lựa chọn tuyệt vời cho
                những ai đang tìm kiếm một bàn phím chất lượng cao
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Shop Detail End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Sản phẩm tương tự</span>
    </h2>
    <div className="row px-xl-5">

        {Array.isArray(productCate) ? (
        <>
          {productCate.slice(0,4).map(product => (

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
      </div> */}
    </div>
  </div>
  {/* Products End */}
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
};

export default Detail;