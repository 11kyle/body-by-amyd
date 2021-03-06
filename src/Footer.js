import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div className="site-header">
        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block secondary-color"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
              <small className="d-block mb-3 text-muted">&copy; 2017-2018 Body by Amy, LLC</small>
            </div>
            <div className="col-6 col-md">
              <h5 className="secondary-color">Navigation</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Home</a></li>
                <li><a className="text-muted" href="#">Pricing</a></li>
                <li><a className="text-muted" href="#">Testimonials</a></li>
                <li><a className="text-muted" href="#">Blog</a></li>
                <li><a className="text-muted" href="#">About</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="secondary-color">About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">4745 Independence Street,</a></li>
                <li><a className="text-muted" href="#">Wheat Ridge, CO 80033</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
