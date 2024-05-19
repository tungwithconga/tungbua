import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const product = {
    id: 1,
    name: 'Tung',
    price: 102,
    quantity: 5
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent product={product} />
    </div>
  );
}

export default ParentComponent;
