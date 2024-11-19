import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { getAllProduct, deleteProduct } from '../../api/server';

const ViewPro = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await getAllProduct();
            setProducts(response);
          } catch (error) {
            console.error('Có lỗi xảy ra khi lấy sản phẩm:', error);
          }
        };
    
        fetchProducts();
      }, []);

      const handleDelete = async (id) => {
        try {
          await deleteProduct(id);
          console.log('Sản phẩm đã được xóa');
          alert('Sản phẩm đã được xóa');
          // Cập nhật lại danh sách sản phẩm sau khi xóa
          setProducts(products.filter(sp => sp._id !== id));
        } catch (error) {
          console.error('Có lỗi xảy ra khi xóa sản phẩm:', error);
        }
      };
    
      
    return (
        <div>
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Trang Quản Lý</Link>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    {/* Danh sách danh mục ở bên trái */}
                    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="sidebar-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" style={{color:'black'}}><i className="fa fa-product"></i> Sản phẩm</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewCate" style={{color:'black'}}><i className="fa fa-list-alt"></i> Danh mục</Link>
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

                    {/* Nội dung chính ở bên phải */}
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="container">
                            <h1><Link to={`/createPro`} className="btn btn-success"><i className="fa fa-plus"></i> Thêm sản phẩm</Link></h1>
                            <div className="row">
                            {Array.isArray(products) ? (
                                    <>
                                    {products.map(sp => (
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src={sp.img} alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title"><a href="#">{sp.name}</a></h5>
                                                <p className="card-text">Mota</p>
                                                <p><strong>Giá:</strong>{sp.price}</p>
                                                <p><strong>Số lượng:</strong>{sp.quantity}</p>
                                                <p><strong>Danh mục:</strong>{sp.catagory.catagoryName}</p>
                                                <Link to={`/giohang/index`} className="btn btn-primary"><i className="fa fa-shopping-cart"></i> Mua</Link>
                                                <Link to={`/editSp/${sp._id}`} className="btn btn-success"><i className="fa fa-edit"></i> Edit</Link>
                                                <button onClick={() => handleDelete(sp._id)}  className="btn btn-danger"><i className="fa fa-trash"></i> Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                        ))}
                                        </>
                                      ) : (
                                        <p>Không có sản phẩm nào để hiển thị.</p>
                                      )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ViewPro;
