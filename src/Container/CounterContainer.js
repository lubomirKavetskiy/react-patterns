import { Component } from 'react';

export default class CounterContainer extends Component {
  state = {
    count: 0,
  }

  decrement = () => this.setState(state => ({ count: state.count - 1 }))
  increment = () => this.setState(state => ({ count: state.count + 1 }))

  render() {
    return (
      this.props.children({
        className: `${this.state.count > 0 ? 'started' : 'not-started'} ${this.props.className}`,
        getCounterProps: ({ onClick, map }) => ({
          count: map(this.state.count),
          decrement: () => {
            this.decrement();
            onClick();
          },
          increment: () => {
            this.increment();
            onClick();
          }
        })
      })
    );
  }
}
