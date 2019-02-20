import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageSearchInput from './Components/ImageSearchInput/ImageSearchInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageSearchInput />
        {/* {
        
        <FaceRecongnition />} */}
      </div>
    );
  }
}

export default App;
