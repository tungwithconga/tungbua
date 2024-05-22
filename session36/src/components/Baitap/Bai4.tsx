import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập dữ liệu..." />
    </div>
  );
};
export default FocusInput;
