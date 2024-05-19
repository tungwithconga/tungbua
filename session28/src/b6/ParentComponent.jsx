import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const users = [
    { id: 1, name: 'd', address: 'hu', email: 'kiki@gmail.com' },
    { id: 2, name: 's', address: 'hui', email: 'kiki@gmail.com' },
    { id: 3, name: 'an', address: 'ha', email: 'kiki@gmail.com' }
  ];

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent users={users} />
    </div>
  );
}

export default ParentComponent;
