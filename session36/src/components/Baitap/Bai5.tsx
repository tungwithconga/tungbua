import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Current Time</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;
