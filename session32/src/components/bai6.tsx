import React, { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('User submitted:', {
      name: user.name,
      email: user.email,
      password: user.password
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Tên:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Mật khẩu:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Nhập lại mật khẩu:
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
