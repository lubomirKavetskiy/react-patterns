import React, { Component } from 'react';
import Tabs from './Tab';


export default class App extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab title="Tab 1">
          1 1 1 1 1 1 1 1 1 1 1 1 1 1
        </Tabs.Tab>

        <Tabs.Tab title="Tab 2">
          2 2 2 2 2 2 2 2 2 2 2 2 2 2
        </Tabs.Tab>

        <Tabs.Tab title="Tab 3">
          3 3 3 3 3 3 3 3 3 3 3 3 3 3
        </Tabs.Tab>
      </Tabs>
    );
  }
}
