import { Component } from 'react';

export default class CounterContainer extends Component {
  state = {
    count: 0,
  }

  decrement = () => this.setState(state => ({ count: state.count - 1 }))
  increment = () => this.setState(state => ({ count: state.count + 1 }))

  render() {
    return (
      this.props.children(
        {
          count: this.state.count,
          decrement: this.decrement,
          increment: this.increment
        }
      )
    );
  }
}
