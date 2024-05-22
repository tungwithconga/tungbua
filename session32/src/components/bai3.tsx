import React, { useState } from 'react';

const BirthdateForm = () => {
  const [birthdate, setBirthdate] = useState('');
  const [submittedBirthdate, setSubmittedBirthdate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedBirthdate(birthdate);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Birthdate:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedBirthdate && (
        <div>
          <h2>Submitted Birthdate:</h2>
          <p>{submittedBirthdate}</p>
        </div>
      )}
    </div>
  );
};
export default BirthdateForm;
