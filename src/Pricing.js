import React, { Component } from 'react';

class Pricing extends Component {
  render () {
    return (
      <div className="container" id="pricing">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Pricing</h1>
          <p className="lead">Come train with an ACE! Certified functional trainer and fitness nutrition specialist. Online or in person!</p>
        </div>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Consultation</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Free</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>1 hour session</li>
                <li>1 on 1 atmosphere</li>
                <li>Goal oriented</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-dark">Get started</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Training</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$60 <small className="text-muted">/ session</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>1 hour session</li>
                <li>1 session</li>
                <li>1 on 1 atmosphere</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-dark">Get started</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Training Package</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$40 <small className="text-muted">/ session</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>1-hour sessions</li>
                <li>8 sessions</li>
                <li>1 on 1 atmosphere</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-dark">Get started</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
