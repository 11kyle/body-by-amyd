import React, { Component } from 'react';

class Jumbotron extends Component {
  render () {
    return (
      <div className="position-relative overflow-hidden text-center bg-light bg-image">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Body by Amy</h1>
          <p className="lead font-weight-normal">Hi! Thanks so much for stopping by! I'm Amy, your personal trainer, running coach and fitness nutrition specialist. I am certified for personal training through the American Council on Exercise and for coaching runners throught the Run Right Pro certification program. I hold additional certifications in fitness nutrition and functional training. I have been coaching and training for nearly four years and running for over a decade. Being fit and active is truly a way of life! It has made me happier and healthier and it can do the same for you.</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
