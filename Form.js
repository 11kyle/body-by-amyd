import React, { Component } from 'react';

class Form extends Component {
  render () {
    return (
      <div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Contact me</h1>
          <p className="lead">Interested in more information about what I offer and what my plans can do for YOU? Please reach out!</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Stay up to date with my monthly newsletter!</label>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
