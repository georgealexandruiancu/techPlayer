import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/style.css';
import Navigation from './comopents/navigation';
import Player from './comopents/player';


class App extends Component {



  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Player/> */}
      </div>
    );
  }
}

export default App;
