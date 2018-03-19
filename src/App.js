import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import axios from 'axios';
import router from './router';
import Footer from './components/Footer';

class App extends Component {

  // componentDidMount(){
  //   alert('Thank you for visiting Anna Lewandowski\'s project site. It is still under construction but you are welcome to use it in the meantime!');
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
            {router}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
