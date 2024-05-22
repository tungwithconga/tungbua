import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')}>
          Trang chủ
        </li>
        <li className={`nav-item ${activeTab === 'About' ? 'active' : ''}`} onClick={() => handleTabClick('About')}>
          Sản Phẩm
        </li>
        <li className={`nav-item ${activeTab === 'Services' ? 'active' : ''}`} onClick={() => handleTabClick('Services')}>
          Giới thiệu
        </li>
        <li className={`nav-item ${activeTab === 'Contact' ? 'active' : ''}`} onClick={() => handleTabClick('Contact')}>
          Liên hệ
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
