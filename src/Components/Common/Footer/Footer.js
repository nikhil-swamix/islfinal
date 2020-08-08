import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-top pt-30">
          <Container fluid>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <div className="footer-address mt-40">
                  <div className="footer-title pb-25">
                    <img
                      src="https://i.ibb.co/yfhVX06/Website-Logo.png"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </div>
                  <p>
                    International Airport Road, Bandlaguda, Hyderabad Telangana
                    India 500005.
                  </p>
                  <p>040 - 29880083</p>
                  <p>info@islec.edu.in</p>

                  <a className="map" href="https://g.page/ISLEC?share">
                    <p>View Location on Google Map</p>
                  </a>
                </div>
              </Col>{" "}
              <Col lg={3} md={6} sm={6}>
                <div className="footer-link mt-40">
                  <div className="footer-title pb-25">
                    <h6>Academics</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="index.html">
                        <i className="fa fa-angle-right"></i>Admissions
                      </a>
                    </li>
                    <li>
                      <a href="about.html">
                        <i className="fa fa-angle-right"></i>Almanac
                      </a>
                    </li>
                    <li>
                      <a href="courses.html">
                        <i className="fa fa-angle-right"></i>Syllabus
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <i className="fa fa-angle-right"></i>R & D{" "}
                      </a>
                    </li>
                    <li>
                      <a href="events.html">
                        <i className="fa fa-angle-right"></i>Rules & Regulations
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="footer-link mt-40">
                  <div className="footer-title pb-25">
                    <h6>Departments</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="courses.html">
                        <i className="fa fa-angle-right"></i>Civil Engineering
                        Department
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <i className="fa fa-angle-right"></i>Computer Science
                        Engineering
                      </a>
                    </li>
                    <li>
                      <a href="events.html">
                        <i className="fa fa-angle-right"></i>Electronics &
                        Communication Engineering
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in#">
                        <i className="fa fa-angle-right"></i>Electronics &
                        Electrical Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <i className="fa fa-angle-right"></i>Information
                        Technology
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <i className="fa fa-angle-right"></i>Mechanical
                        Engineering
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="footer-link mt-40">
                  <div className="footer-title pb-25">
                    <h6>Campus Life</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="index.html">
                        <i className="fa fa-angle-right"></i>Library
                      </a>
                    </li>
                    <li>
                      <a href="about.html">
                        <i className="fa fa-angle-right"></i>Laboratories
                      </a>
                    </li>
                    <li>
                      <a href="courses.html">
                        <i className="fa fa-angle-right"></i>Student Life
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <i className="fa fa-angle-right"></i>Gallery
                      </a>
                    </li>
                    <li>
                      <a href="events.html">
                        <i className="fa fa-angle-right"></i>Events
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-copyright">
          <Container>
            <Row>
              <Col md={8} className="text-center">
                <div className="copyright text-md-left">
                  <p>&copy; Copyrights 2020 ISL Engineering College. </p>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <div className="copyright text-md-right">
                  <ul class="mt-0">
                    <li>
                      <a href="https://islengg.ac.in#">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
