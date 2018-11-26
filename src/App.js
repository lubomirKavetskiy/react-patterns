import React from 'react';

import CounterContainer from './Container/CounterContainer';

export const App = () =>
  <CounterContainer className="counter">
    {({ className, counterProps }) =>
      (<div className={className}>
        <button onClick={counterProps.decrement}>-</button>
        {counterProps.count}
        <button onClick={counterProps.increment}>+</button>
      </div>)}
    {/* you won't use className below, but counterProps opposite */}
  </CounterContainer>
