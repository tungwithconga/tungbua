import React, { useState } from 'react';
const ProductForm = () => {
  const [product, setProduct] = useState({
    productId: '',
    productName: '',
    price: '',
    quantity: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Product submitted:', product); 
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Mã sản phẩm:
            <input
              type="text"
              name="productId"
              value={product.productId}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tên sản phẩm:
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Giá:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Số lượng:
            <input
              type="number"
              name="quantity"
              value={product.quantity}
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
export default ProductForm;