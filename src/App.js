import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Pricing from './Pricing';
import Form from './Form';
import Footer from './Footer';
import './Product.css';
import './Pricing.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Pricing />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
