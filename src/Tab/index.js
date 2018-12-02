import React, { Component } from 'react';
import '../style.css'

const Tab = ({ active, title, ...props }) => {
  // тут в ...props зайде пропса onClick, яку прирівняють до стадартного івента onClick
  return (<a className={`tab ${active ? ' active' : ''}`} {...props}>{title}</a>);
}


export default class Tabs extends Component {
  static Tab = Tab;

  state = {
    activeTabIndex: 0,
  }

  handleClick = index => this.setState({ activeTabIndex: index });

  isActive = index => index === this.state.activeTabIndex;

  render() {
    return (
      <>
        <nav className="tabs">
          {
            // тут буде [children_сів], тобто компоненти Tab, які стануть child і для яких
            // теж існуватиме props.children
            // тобто child.props.children це текст "1 1 1 1 1 1 1 1 1 1 1 1 1 1"
            React.Children.map(this.props.children, (child, index) =>
              // тут ми юзаємо cloneElement, щоб передати в компоненту Tab пропси
              // тобто, компонента Tab зайде як this.props.children для компоненти Tabs, і Tab стане як child 
              // для я кої теж існуватиме props.children (1 1 1 1 1 1 1 1 1 1 1)
              React.cloneElement(child, {
                active: this.isActive(index),
                onClick: () => this.handleClick(index)
              }, child.props.title)
            )
          }
        </nav>

        {
          React.Children.map(this.props.children, (child, index) =>
            this.isActive(index) && <section>{child.props.children}</section>
          )
        }
      </>
    );
  }
}