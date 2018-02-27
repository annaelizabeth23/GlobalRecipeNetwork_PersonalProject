import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import axios from 'axios';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
            <HomeContent />
        </main>
      </div>
    );
  }
}

export default App;
