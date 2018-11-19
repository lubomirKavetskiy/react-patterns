import React, { Component } from 'react';

function decrement(state, { step }) {
  return ({ count: state.count - step })
}

export default class Counter extends Component {
  state = {
    count: 0,
  }

  decrement = () => this.setState(decrement)
  //decrement = () => this.setState(state => ({ count: state.count - 1 }))
  increment = () => this.setState({ count: this.state.count + 1 })

  render() {
    return (
      <p>
        <button onClick={this.decrement}>-</button>
        {this.state.count}
        <button onClick={this.increment}>+</button>
      </p>
    );
  }
}