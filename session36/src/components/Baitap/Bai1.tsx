import React, { useState, useEffect } from 'react';

const ChangeTitle = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    document.title = title ? title : 'Nhập tiêu đề...';
  }, [title]);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <input 
        type="text" 
        placeholder="tiêu đề" 
        value={title} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default ChangeTitle;
