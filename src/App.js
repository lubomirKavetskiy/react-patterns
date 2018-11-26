import React from 'react';

import CounterContainer from './Container/CounterContainer';

const sendAnalitics = () => console.log('sent analitic');

export const App = () =>
  <CounterContainer className="counter">
    {({ className, getCounterProps }) => {
      const counterProps = getCounterProps({
        onClick: () => sendAnalitics(),
        map: counter => counter * 2,
      });

      return (<div className={className}>
        <button onClick={counterProps.decrement}>-</button>
        {counterProps.count}
        <button onClick={counterProps.increment}>+</button>
      </div>)
    }
    }
  </CounterContainer>
