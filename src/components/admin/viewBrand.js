import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBrands, deleteBrand } from '../../api/server';

const ViewBrand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getBrands();
        setBrands(response);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy danh mục:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBrand(id);
      console.log('Danh mục đã được xóa');
      setBrands(brands.filter(category => category._id !== id));
    } catch (error) {
      console.error('Có lỗi xảy ra khi xóa danh mục:', error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Trang Quản Lý Danh Mục</a>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/viewPro" style={{color:'black'}}><i className="fa fa-product-hunt"></i> Sản phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/viewCate" style={{color:'black'}}><i className="fa fa-list-alt"></i> Danh mục</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/viewBrand" style={{color:'black'}}><i className="fa fa-users"></i> Brand</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/viewOrder" style={{color:'black'}}><i className="fa fa-shopping-cart"></i> Đơn hàng</Link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="container">
              <h1><Link to="/createCate" className="btn btn-primary"><i className="fa fa-plus"></i> Thêm danh mục</Link></h1>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Tên Brand</th>
                    <th>Hình ảnh</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((dm) => (
                    <tr key={dm._id}>
                      <td>{dm.name}</td>
                      <td><img src={dm.img} alt="" width="200" height="200" /></td>
                      <td>
                        <button className="btn btn-success">
                          <Link to={`/editBrand/${dm._id}`}><i className="fa fa-edit"></i> Edit</Link>
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(dm._id)} className="btn btn-danger">
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

export default ViewBrand;
