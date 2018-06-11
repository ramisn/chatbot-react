import React, { Component } from 'react';
import logo from './logo.svg';
import logo1 from './forklift.svg';
import logo2 from './jumbo-jet.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TVS LsL ChatBot</h1>
        </header>
        <img src="https://www.0grados.com/admin/wp-content/uploads/2016/08/Neg-El-valor-de-la-logistica.jpg" alt=""/>
        <iframe
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/tvslsl-bot">
        </iframe>
      </div>
    );
  }
}

export default App;
