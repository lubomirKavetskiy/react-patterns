import React from 'react';

import CounterContainer from './Container/CounterContainer';

// insted of div, here can be some Component
const renderMethod = c => <div>{c}</div>;

export const App = () =>
  // this.props.method
  <CounterContainer method={renderMethod}>
    {
      // this.props.children
      ({ count, increment, decrement }) =>
        <>
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </>
    }
  </CounterContainer>
