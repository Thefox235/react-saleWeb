import React, { useState, useEffect } from 'react';
import { createProduct, getCategories, getBrands } from '../../api/server';

const CreatePro = () => {
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
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        const brandsData = await getBrands();
        setBrands(brandsData);
      } catch (error) {
        setError('Có lỗi xảy ra khi lấy danh sách danh mục hoặc thương hiệu');
      }
    };
    fetchData();
    console.log(categories);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = await createProduct(form);
      console.log('Sản phẩm mới:', newProduct);
      alert('Tạo sản phẩm thành công!');
      // Xử lý sau khi thêm sản phẩm thành công (ví dụ: thông báo thành công, reset form, v.v.)
    } catch (error) {
      setError('Có lỗi xảy ra khi thêm sản phẩm');
      alert('Có lỗi xảy ra khi thêm sản phẩm');
    }
  };

  return (
    <div className="container">
      <h1>Thêm sản phẩm</h1>
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
            value={form.status}
            onChange={handleChange}
            className="form-control"
          />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Mô tả:</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Nhập mô tả"
            className="form-control"
          ></textarea>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Danh mục:</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Chọn danh mục</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
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
            <option value="">Chọn thương hiệu</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePro;
