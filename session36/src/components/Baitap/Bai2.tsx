import React, { useState, useEffect } from 'react';

const CountClick = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>
        Click 
      </button>
      <p>click {count} lan</p>
    </div>
  );
};

export default CountClick;
