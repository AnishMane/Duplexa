/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//adding file uploader package
import React, { useRef } from 'react';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <h1 className="text-white">
                      A hackathon project.
                    </h1>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href=""
                        size="lg"
                      >

                        <span className="btn-inner--text">Upload File</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href=""
                        size="lg"
                        target="_blank"
                      >
                        
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Clean data</span>
                        </span>
                      </Button>
                    </div>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href=""
                        size="lg"
                      >
                        
                        <span className="btn-inner--text">Delete</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href=""
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                        
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Keep</span>
                        </span>
                      </Button>
                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        proudly coded by <b><u>Team Duplexa</u></b>
                      </small>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;


/**
 * Code for Icond on all buttons
                         <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>

  <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>

  <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>

                        Did not remove the span section for keep because its giving some visual error(not syntax)
                        
 */
