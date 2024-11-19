import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct, getProductById, getCategories, getBrands } from '../../api/server';

const EditPro = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    img: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    brand: ''
  });
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductById(id);
        setForm(productData);
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        const brandsData = await getBrands();
        setBrands(brandsData);
      } catch (error) {
        setError('Có lỗi xảy ra khi lấy dữ liệu sản phẩm hoặc danh mục hoặc thương hiệu');
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = await updateProduct(id, form);
      console.log('Sản phẩm đã cập nhật:', updatedProduct);
      // Xử lý sau khi cập nhật sản phẩm thành công (ví dụ: thông báo thành công, chuyển hướng, v.v.)
    } catch (error) {
      setError('Có lỗi xảy ra khi cập nhật sản phẩm');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Chỉnh sửa sản phẩm</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Tên sản phẩm:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Số lượng:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="img">Hình ảnh:</label>
                  <input
                    type="text"
                    id="img"
                    name="img"
                    value={form.img}
                    onChange={handleChange}
                    placeholder="Nhập URL hình ảnh"
                    className="form-control"
                  />
                  <img src={form.img} alt="Hình ảnh danh mục" width="200" height="200" />
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="price">Giá:</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="status">Trạng thái:</label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    value={form.hot}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="id_danhmuc">Danh mục:</label>
                  <select
                    id="id_danhmuc"
                    name="id_danhmuc"
                    value={form.id_danhmuc}
                    onChange={handleChange}
                    className="form-control"
                  >
                    {categories.map((dm) => (
                      <option key={dm._id} value={dm._id}>
                        {dm.name}
                      </option>
                    ))}
                  </select>
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="brand">Thương hiệu:</label>
                  <select
                    id="brand"
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                    className="form-control"
                  >
                    {brands.map((brand) => (
                      <option key={brand._id} value={brand._id}>
                        {brand.name}
                      </option>
                    ))}
                  </select>
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPro;
