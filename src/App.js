import React, { Component } from 'react';
import Counter from './Counter';

export default class App extends Component {
  state = {
    count: 0,
  }

  handleChange = count => this.setState({ count });

  render() {
    const { count } = this.state;
    return (
      <>
        {/* controlled component */}
        <Counter count={count} onChange={this.handleChange} />
        {/* uncontrolled component */}
        <Counter />
      </>
    );
  }
}

