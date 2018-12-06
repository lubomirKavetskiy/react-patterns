import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: this.props.count || 0
  }

  decrement = () => this.setState(state => ({ count: state.count - 1 }))
  increment = () => this.setState(state => ({ count: state.count + 1 }))

  render() {
    const { count } = this.state;
    return (
      <>
        <button onClick={this.decrement}>-</button>
        <span>{count}</span>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
