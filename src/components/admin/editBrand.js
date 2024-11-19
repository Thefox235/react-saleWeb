import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateBrand, getBrandById } from '../../api/server';

const EditBrand = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    img: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const brandData = await getBrandById(id);
        setForm(brandData);
      } catch (error) {
        setError('Có lỗi xảy ra khi lấy dữ liệu danh mục');
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
      const updatedBrand = await updateBrand(id, form);
      console.log('Danh mục đã cập nhật:', updatedBrand);
      // Xử lý sau khi cập nhật danh mục thành công (ví dụ: thông báo thành công, chuyển hướng, v.v.)
    } catch (error) {
      setError('Có lỗi xảy ra khi cập nhật danh mục');
    }
  };

  return (
    <div className="container">
      <h1>Chỉnh sửa danh mục</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên Brand:</label>
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
          <label htmlFor="img">Hình Brand:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={form.img}
            onChange={handleChange}
            className="form-control"
          />
          {error && <div className="alert alert-danger">{error}</div>}
          <img src={form.img} alt="Hình ảnh danh mục" width="200" height="200" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EditBrand;
