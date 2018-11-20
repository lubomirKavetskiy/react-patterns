import React, { Component } from 'react';
import Counter from '../DumpComponent/Counter';

export default class CounterContainer extends Component {
  state = {
    count: 0,
  }

  decrement = () => this.setState(state => ({ count: state.count - 1 }))
  increment = () => this.setState(state => ({ count: state.count + 1 }))

  render() {
    return (
      <Counter {...this.state} decrement={this.decrement} increment={this.increment} />
    );
  }
}
