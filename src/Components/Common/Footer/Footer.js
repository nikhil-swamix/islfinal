import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                    International Airport Road, Bandlaguda, Chandrayangutta
                     Hyderabad - 500005 Telangana, India.
                  </p>
                  <a className="map" href="tel:04029880083">
                    <p>040 - 29880083</p>
                  </a>
                  <br />
                  <a className="map" href="mailto:info@islec.edu.in">
                    <p>info@islec.edu.in</p>
                  </a>
                  <br/>

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
                      <Link href="#admissions" as={Link} to="/admissions">
                        <i className="fa fa-angle-right"></i>Admissions
                      </Link>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-angle-right"></i>Almanac
                      </a>
                    </li>
                    <li>
                      <Link href="#syllabus" as={Link} to="/syllabus">
                        <i className="fa fa-angle-right"></i>Syllabus
                      </Link>
                    </li>
                    <li>
                      <Link href="#research" as={Link} to="/research">
                        <i className="fa fa-angle-right"></i>R & D
                      </Link>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1T1kL1677llUwx56Ruc7JIU1SfSY2bqw7/view">
                        <i className="fa fa-angle-right"></i>Rules & Regulations
                      </a>
                    </li>
                    <li>
                      <a href="https://forms.gle/sd53QUSfRM2dU63J9">
                        <i className="fa fa-angle-right"></i>Student Grievance Form
                      </a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/17fZd107gNz6GOiKv7pIim4upmzU7UPqK/view?usp=sharing">
                        <i className="fa fa-angle-right"></i>Mandatory Disclosure
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
                      <Link href="#ce" as={Link} to="/department/ce">
                        <i className="fa fa-angle-right"></i>Civil Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="#cse" as={Link} to="/department/cse">
                        <i className="fa fa-angle-right"></i>Computer Science
                        Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="#ece" as={Link} to="/department/ece">
                        <i className="fa fa-angle-right"></i>Electronics &
                        Communication Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="#ds" as={Link} to="/department/ds">
                        <i className="fa fa-angle-right"></i>Artificial Inteligence & Data Science{' '}
                      </Link>
                    </li>
                    <li>
                      <Link href="#it" as={Link} to="/department/it">
                        <i className="fa fa-angle-right"></i>Information
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link href="#me" as={Link} to="/department/me">
                        <i className="fa fa-angle-right"></i>Mechanical
                        Engineering
                      </Link>
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
                      <Link href="#library" as={Link} to="/library">
                        <i className="fa fa-angle-right"></i>Library
                      </Link>
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
                      <Link href="#events" as={Link} to="/events">
                        <i className="fa fa-angle-right"></i>Events
                      </Link>
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
                <div className="copyright social text-md-right">
                  <ul className="mt-0">
                    <li>
                      <span>
                        Follow us{' '}
                        <a href="https://www.linkedin.com/school/isl-engineering-college/">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </span>
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
