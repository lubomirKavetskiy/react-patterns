import React, { Component } from 'react';
import Counter from './Counter';

export default class App extends Component {
  handleChange = (count) => console.log(1, count);

  render() {
    return (
      <Counter onChange={this.handleChange} />
    );
  }
}

