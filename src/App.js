import React from 'react';

import CounterContainer from './Container/CounterContainer';

export const App = () =>
  <CounterContainer>
    {({ count, increment, decrement }) =>
      (<>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </>)}
  </CounterContainer>
