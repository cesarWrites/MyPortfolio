import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="site-section bg-light" id="section-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Want to <strong>Start Working</strong> With Me?
                  </h2>
                </div>
              </div>

              <div className="col-md-7 mb-5 mb-md-0">
                <form action="" className="site-form">
                  <h3 className="mb-5">Get In Touch</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control px-3 py-4"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="form-group mb-5">
                    <textarea
                      className="form-control px-3 py-4"
                      cols="30"
                      rows="10"
                      placeholder="Write a Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary px-4 py-3"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 pl-md-5">
                <h3 className="mb-5">My Contact Details</h3>
                <ul className="site-contact-details">
                  <li>
                    <span className="text-uppercase">Email</span>
                    sarahmukutic@gmail.com
                  </li>
                  <li>
                    <span className="text-uppercase">Phone</span>
                    +254708549463
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div className="row mb-3">
              <div className="col-md-12 text-center">
                <p>
                  <a
                    href="https://www.facebook.com/sarah.hasar.24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="icon-facebook2"></span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarah-mukuti-10768b184/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="icon-linkedin2"></span>
                  </a>
                  <a
                    href="https://github.com/cesarWrites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="icon-github"></span>
                  </a>
                  <a href="#https://twitter.com/sarahmukuti" className="social-item">
                    <span className="icon-twitter"></span>
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <p className="col-12 text-center">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This website is designed by Sarah Mukuti
                <i className="icon-heart" aria-hidden="true"></i> 
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}