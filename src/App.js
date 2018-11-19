import React, { Component } from 'react';

import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter step={5} />
      </div>
    );
  }
}

export default App;
