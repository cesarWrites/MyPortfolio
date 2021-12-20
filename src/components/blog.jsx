import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="site-section" id="section-blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Blog on <strong>Medium</strong>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#blog">
                    <img
                      src="images/reactjs.jpg"
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="https://dev.to/cesarwrites/fun-facts-when-learning-react-1b6h">
                        Learning React. 
                      </a>
                    </h3>
                    <p className="mb-4">
                        React is a powerful javascript framework that helps users 
                        to create interactive applications with reusable components.
                    </p>

                    <div className="meta">
                      <a href="#calender">
                        <span className="icon-calendar"></span> Dec 30, 2020
                      </a>
                      <a href="#bubble">
                        <span className="icon-bubble"></span> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#blog">
                    <img
                      src="images/post_2.jpg"
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#blog">
                        Data Science Concepts
                      </a>
                    </h3>
                    <p className="mb-4">
                      Data is growing at a very exponential rate. Businesses should take that to their 
                      advantage and create meaningful insights and recommendations using analysis tools. 
                    </p>

                    <div className="meta">
                      <a href="#calander">
                        <span className="icon-calendar"></span> Aug 7, 2018
                      </a>
                      <a href="#bubble">
                        <span className="icon-bubble"></span> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#blog">
                    <img
                      src="images/image_1_long.jpg"
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#blog">
                        Heuristic Analysis.
                      </a>
                    </h3>
                    <p className="mb-4">
                      Even with the best skills and tools at their disposal 
                      developers cannot build usable sights if they do not do a proper evaulation of the target users. 
                    </p>

                    <div className="meta">
                      <a href="#calander">
                        <span className="icon-calendar"></span> Aug 7, 2018
                      </a>
                      <a href="#bubble">
                        <span className="icon-bubble"></span> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}