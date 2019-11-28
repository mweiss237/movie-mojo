import React, { Component } from 'react';
import Header from './Header';
import Collection from './Collection';
import '../App.css';

class App extends Component {
  render() {
    const headerText = "Moritz' App"
    return (
      <div className="App">
        <Header text={headerText} />
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
        <Collection />
      </div>
    );
  }
}

export default App;
