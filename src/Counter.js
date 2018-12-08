import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    // if to make like this: count: this.props.count || 0 => 
    // state will change by props, but it will not rerendr component
    count: 0
  }

  // we use 'get' for don't call this function isControled() 
  get isControled() {
    return this.props.count !== undefined;
  }

  getState = () => this.isControled ? this.props : this.state;

  change = value => {
    // 
    if (this.isControled) return this.props.onChange(this.getState().count + value);
    return this.setState({ count: this.getState().count + value });
  }

  decrement = () => this.change(-1);
  increment = () => this.change(1);

  render() {
    return (
      <>
        <button onClick={this.decrement}>-</button>
        {/* we can't write like this: <span>{this.state.count}</span>,
        because component wont rerender after changing state */}
        <span>{this.getState().count}</span>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
