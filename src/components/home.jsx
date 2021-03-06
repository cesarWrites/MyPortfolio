import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section
          className="site-hero"
          style={{ backgroundImage: "url(images/img2.jpg)" }}
          id="section-home"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row intro-text align-items-center justify-content-center">
              <div className="col-md-10 text-center">
                <h1 className="site-heading site-animate">
                  Hello, I'm <strong>Sarah Mukuti Mutisya</strong>
                </h1>
                <p className="lead site-subheading mb-4 site-animate">
                  A data scientist urgently looking for a new role.I love
                  to explore new technologies and always try to enhance my
                  skills through developing some projects.
                </p>
                <p>
                  <a
                    href="#section-about"
                    className="smoothscroll btn btn-primary px-4 py-3"
                  >
                    More AboutMe
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}