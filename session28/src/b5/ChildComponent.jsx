import React from 'react';

function ChildComponent(props) {
  const { id, name, price, quantity } = props.product;
  
  return (
    <div>
      <h2>Child Component</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default ChildComponent;
