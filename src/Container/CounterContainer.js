import React from 'react';

export default class CounterContainer extends React.Component {
  state = {
    count: 0,
  }

  decrement = () => this.setState(state => ({ count: state.count - 1 }))
  increment = () => this.setState(state => ({ count: state.count + 1 }))

  render() {
    const { children, method } = this.props;
    const { count } = this.state;

    return (
      <>
        {children(
          {
            count,
            decrement: this.decrement,
            increment: this.increment
          }
        )}
        {/* we pass state value in some tag or even in some Component (id doesn't matter here)*/}
        {method(count)}
      </>
    );
  }
}
