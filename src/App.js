import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageSearchInput from './Components/ImageSearchInput/ImageSearchInput';
import './App.css';
import Particles from 'react-particles-js';

const particleOption ={
  particles:{
    number:{
      value: 80,
      density:{
        enable: true,
        value_area:800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Particles className="particles"
                params={particleOption} />
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
