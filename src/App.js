import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Pricing from './Pricing';
import About from './About';
import Form from './Form';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Footer from './Footer';
import './Product.css';
import './Pricing.css';
import './Styles.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Pricing />
        <About />
        <Form />
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
