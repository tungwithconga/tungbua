import React, { useState } from 'react';

const ProgressForm = () => {
  const [progress, setProgress] = useState(0);
  const [submittedProgress, setSubmittedProgress] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    setSubmittedProgress(progress); // Cập nhật tiến độ đã nhập
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Progress:
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            required
          />
          <span>{progress}%</span>
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedProgress !== null && (
        <div>
          <h2>Submitted Progress:</h2>
          <p>{submittedProgress}%</p>
        </div>
      )}
    </div>
  );
};

export default ProgressForm;
