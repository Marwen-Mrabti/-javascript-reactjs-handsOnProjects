import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main>
        <div className="container">
          <h1>JavaScript counter</h1>
          <h1 id="count">Counter value : {count}</h1>
          {console.log(count)}
          <div className="controls">
            <button
              id="increment"
              onClick={() => setCount((prevState) => prevState + 1)}
            >
              increment
            </button>
            <button
              id="decrement"
              onClick={() => setCount((prevState) => prevState - 1)}
            >
              decrement
            </button>
            <button
              id="reset"
              onClick={() => setCount((prevState) => (prevState = 0))}
            >
              reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Counter;
