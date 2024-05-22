import React, { useState } from 'react';
const ColorForm = () => {
  const [color, setColor] = useState('');
  const [submittedColor, setSubmittedColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedColor(color); 
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter a color"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedColor && (
        <div>
          <h2>Submitted Color:</h2>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: submittedColor,
              border: '1px solid #000',
              marginTop: '30px'
            }}
          ></div>
          <p>{submittedColor}</p>
        </div>
      )}
    </div>
  );
};

export default ColorForm;
