import React, { Component } from 'react';

function Quote(props) {
  const rows = props.quoteData.map((row, index) => {
    return (
      <blockquote key={index} className="blockquote">
        <p className="mb-0">{row.testimonial}</p>
        <footer className="blockquote-footer">{row.name} - <cite title="Source Title">{row.location}</cite></footer>
      </blockquote>
    );
  });
  return <div>{rows}</div>
}

class Testimonials extends Component {
  render () {
    const { quoteData } = this.props;
    return (
      <div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Testimonials</h1>
          <p className="lead">See what my clients are saying.</p>
        </div>
        <Quote quoteData={quoteData} />
      </div>
    );
  }
}

export default Testimonials;
