import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class App extends Component {
  render() {
    const headerText = "Moe's Movie Mojo App"
    return (
      <div className="App">
        <Header text={headerText} />
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
    );
  }
}

export default App;
