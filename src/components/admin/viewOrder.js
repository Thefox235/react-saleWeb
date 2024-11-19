import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getOrder } from '../../api/server';
import { Link } from 'react-router-dom';
const BASE_URL = 'http://localhost:3000'; 
const ViewOrder = () => {
  const [orders, setOrders] = useState([]);

  const checkStatus = (a) => {
    if (a === 0) {
      return "đang xử lý";
    } else if (a === 1) {
      return "đang giao hàng";
    } else if (a === 2) {
      return "đã giao hàng";
    } else {
      return "đã hủy";
    }
  };

  const onStatusChange = async (id, event) => {
    const newStatus = event.target.value;
    try {
      await axios.put(`${BASE_URL}/order/${id}`, { status: newStatus });
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
      alert('Cập nhật trạng thái thành công!');
    } catch (error) {
      console.error('Có lỗi xảy ra khi cập nhật trạng thái:', error);
      alert('Cập nhật trạng thái thất bại!');
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrder();
        console.log(response);
        setOrders(response);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy sản phẩm:', error);
      }
    };

    fetchOrders();
  }, []);
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Trang Quản Lý Đơn hàng</a>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Danh sách danh mục ở bên trái */}
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/viewPro" style={{color:'black'}}><i className="fa fa-product-hunt"></i> Sản phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/viewCate"  style={{color:'black'}}><i className="fa fa-list-alt"></i> Danh mục</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to=""  style={{color:'black'}}><i className="fa fa-users"></i> Người dùng</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="#" style={{color:'black'}}><i className="fa fa-shopping-cart"></i> Đơn hàng</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Nội dung chính ở bên phải */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="container">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quanlity</th>
                    <th>Price</th>
                    <th>status</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    {orders.map(sp => (
                  <tr key={sp._id}>
                    <td>{sp.name}</td>
                    <td><img src={sp.img} alt="" width="200" /></td>
                    <td>{sp.quantity}</td>
                    <td>{sp.price}</td>
                    <td>
                      <select value={sp.status} onChange={(e) => onStatusChange(sp._id, e)}>
                        <option value="0">{checkStatus(0)}</option>
                        <option value="1">{checkStatus(1)}</option>
                        <option value="2">{checkStatus(2)}</option>
                        <option value="3">{checkStatus(3)}</option>
                      </select>
                    </td>
                    <td>
                      <button className="btn btn-danger">
                        <i className="fa fa-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
