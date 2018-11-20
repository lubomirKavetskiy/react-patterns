import React from 'react';

export default ({ count, decrement, increment }) =>
  <>
    <button onClick={decrement}>-</button>
    {count}
    <button onClick={increment}>+</button>
  </>
