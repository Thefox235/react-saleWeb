import React, { useState } from 'react';
import { createCategory } from '../../api/server';

const CreateCate = () => {
  const [form, setForm] = useState({ name: '', img: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCategory = await createCategory(form);
      console.log('Danh mục mới:', newCategory);
      alert('Thêm danh mục thành công');
      // Xử lý sau khi thêm danh mục thành công (ví dụ: thông báo thành công, reset form, v.v.)
    } catch (error) {
      setError('Có lỗi xảy ra khi thêm danh mục');
    }
  };

  return (
    <div className="container">
      <h1>Thêm Danh Mục</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên Danh Mục:</label>
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateCate;