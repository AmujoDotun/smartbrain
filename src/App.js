import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageSearchInput from './Components/ImageSearchInput/ImageSearchInput';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
  apiKey: 'cbeec327769b4f29b84e08b42e49ae1f'
 });

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
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  
CalculateFaceLocation = (data) =>{
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
   const image = document.getElementById('inputImage');
   const width = Number(image.width);
   const height = Number(image.height);

// returning the calculatd facce region
   return{
     leftCol: clarifaiFace.left_col * width,
     topRow: clarifaiFace.top_row * height,
     rightCol: width - (clarifaiFace.right_col * width),
     bottomRow: height - (clarifaiFace.bottom_row *height)

   }
}

// displaying the box on the face
displayFaceBox = (box) =>{
     this.setState({box: box});
     console.log(box);
}


onRouteChange =(route) =>{
  this.setState({route: route})
}


onInputChange =(event) =>{
  this.setState({input:event.target.value});
}

onButtonSubmit =() => {
    this.setState({imageUrl: this.state.input})
  app.models
  .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)

    .then(response => this.displayFaceBox(this.CalculateFaceLocation(response)))
    .catch(err => console.log(err));
  
}

  render() {
    return (
      <div className="App">
       <Particles className="particles"
                params={particleOption} />
        <Navigation onRouteChange={this.onRouteChange}/>
        {/* giving it a conditional statement */}
        { this.state.route === 'signin'
          ?<SignIn  onRouteChange={this.onRouteChange}/>

          :<div> 
              <Logo />
              <Rank />
              <ImageSearchInput 
              onInputChange ={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box ={this.state.box} imageUrl={this.state.imageUrl} />
            </div>
        }
      </div>
    );
  }
}

export default App;
