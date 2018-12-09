import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    // if to make like this: count: this.props.count || 0 => 
    // state will change by props, but it will not rerendr component
    count: 5,
    // like this count : this.props.count => new this.props.count wont change this.state.count
    // because it works only one time during constructor lifesycle, what is happened only one time
  }

  // using 'get' allows us call method (inside or outdoor class) like this `isControled`, without '()'
  get isControled() {
    return this.props.count !== undefined;
  }

  getState = () => this.isControled ? this.props : this.state;

  change = value => {
    if (this.isControled) return this.props.onChange(this.getState().count + value);
    return this.setState({ count: this.getState().count + value });
  }

  decrement = () => this.change(-1);
  increment = () => this.change(1);

  render() {
    return (
      <p>
        <span>{this.props.count !== undefined ? 'controlled component: ' : 'uncontrolled component: '}</span>
        <button onClick={this.decrement}>-</button>
        {/* we can't write like this: <span>{this.state.count}</span>,
        because component wont rerender after changing state */}
        <span>{this.getState().count}</span>
        <button onClick={this.increment}>+</button>
      </p>
    );
  }
}
