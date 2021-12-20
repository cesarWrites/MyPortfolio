import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <section className="site-section bg-light" id="section-resume">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    My <strong>Resume</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Education</h2>
                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> September 2017 -  October 2021
                  </span>
                  <h3>Bachelor of Computer Science</h3>
                  <p>
                    I completed studies in computer Science including
                    mathematical and theoretical foundations of computing. I did
                    coursework in Networking, Database managemnt, Machine learning, Software engineering,
                    IOT and analyis of algorithms as part of the curriculumn. that was helping to
                    develop my technical problem solving, development of
                    software applications and testing skills.
                  </p>
                  <span className="school">Laikipia University</span>
                </div>

                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> June 2019 - October, 2019
                  </span>
                  <h3>CCNA Certification</h3>
                  <p>
                    I complteted a course on Cisco networking certification that helped me 
                    develop more skills in routing, switching, and scaling networks.
                  </p>
                  <span className="school">Cisco Networking Academy</span>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Experience</h2>

                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> May 2020 -
                    August 2020
                  </span>
                  <h3>GADS SDG Program</h3>
                  <p>
                    Took part in the Google Africa Developer scholarship SDG competition. 
                    Together with my team developed a web application to help enhance access to mental ehalth services.
                  </p>
                  <span className="school">Google Africa Developer</span>
                </div>

                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> October - December 2021
                  </span>
                  <h3>Technical Support attachee</h3>
                  <p>
                   Gained experience in managing software, network and hardware problems. The key
                    responsibility of this role was to find and solve the client
                    issues.
                  </p>
                  <span className="school">ICT Authority</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}