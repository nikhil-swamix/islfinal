import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
                  <a className="map" href="tel:04029880083">
                    <p>040 - 29880083</p>
                  </a>
                  <br />
                  <a className="map" href="mailto:info@islec.edu.in">
                    <p>info@islec.edu.in</p>
                  </a>

                  <a className="map" href="https://g.page/ISLEC?share">
                    <p>View Location on Google Map</p>
                  </a>
                </div>
              </Col>{' '}
              <Col lg={3} md={6} sm={6}>
                <div className="footer-link mt-40">
                  <div className="footer-title pb-25">
                    <h6>Academics</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="/admissions">
                        <i className="fa fa-angle-right"></i>Admissions
                      </a>
                    </li>
                    <li>
                      <a href="/almanac">
                        <i className="fa fa-angle-right"></i>Almanac
                      </a>
                    </li>
                    <li>
                      <a href="/syllabus">
                        <i className="fa fa-angle-right"></i>Syllabus
                      </a>
                    </li>
                    <li>
                      <a href="/research">
                        <i className="fa fa-angle-right"></i>R & D{' '}
                      </a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1T1kL1677llUwx56Ruc7JIU1SfSY2bqw7/view">
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
                      <a href="/department/ce">
                        <i className="fa fa-angle-right"></i>Civil Engineering
                        Department
                      </a>
                    </li>
                    <li>
                      <a href="/department/cse">
                        <i className="fa fa-angle-right"></i>Computer Science
                        Engineering
                      </a>
                    </li>
                    <li>
                      <a href="/department/ece">
                        <i className="fa fa-angle-right"></i>Electronics &
                        Communication Engineering
                      </a>
                    </li>
                    <li>
                      <a href="/department/eee">
                        <i className="fa fa-angle-right"></i>Electronics &
                        Electrical Engineering{' '}
                      </a>
                    </li>
                    <li>
                      <a href="/department/it">
                        <i className="fa fa-angle-right"></i>Information
                        Technology
                      </a>
                    </li>
                    <li>
                      <a href="/department/me">
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
                      <a href="#/">
                        <i className="fa fa-angle-right"></i>Library
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <i className="fa fa-angle-right"></i>Laboratories
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <i className="fa fa-angle-right"></i>Student Life
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <i className="fa fa-angle-right"></i>Gallery
                      </a>
                    </li>
                    <li>
                      <a href="/events">
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
                  <ul className="mt-0">
                    <li>
                      <a href="#/">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/school/isl-engineering-college/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <i className="fa fa-instagram"></i>
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
  )
}

export default Footer
