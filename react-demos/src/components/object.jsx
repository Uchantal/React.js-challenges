import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(2);

  const increment = () => {
    setCount(prevCount => prevCount + 2);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}> + </button>
    </div>
  );
};

export default Counter;
