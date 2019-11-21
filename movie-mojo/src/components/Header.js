import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      //  React.createElement( 'div', null, 'Hello there, this is a React component!' )
      <div className="App-header">
        <h2>{this.props.text}</h2>
      </div>
    )
  }
}

export default Header;
