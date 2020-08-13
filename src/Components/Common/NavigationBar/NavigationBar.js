import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
      <header>
        <div className="header-top">
          <Container fluid>
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                <div className="header_left">
                  <ul className="header_ul">
                    <li>
                      <a href="tel:+04012345678">
                        <span className="fa fa-phone"></span>040 - 29880083
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@islec.edu.in">
                        <span className="fa fa-envelope"></span>{' '}
                        info@islec.edu.in
                      </a>
                    </li>

                    <li>
                      <a href="#/">Alumni</a>
                    </li>
                    <li>
                      <a href="#/">E-Mail</a>
                    </li>
                    <li>
                      <a href="#/">Online Fee</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="header_right text-center">
                  <ul className="header_ul">
                    <li>
                      <a href="https://islengg.ac.in#">
                        EAMCET, ECET & ICET Code : ISLC{' '}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/school/isl-engineering-college/">
                        Follow us{' '}
                        <span className="linkedin">
                          <img
                            src="https://i.ibb.co/JvRV67t/LI-In-Bug.png"
                            alt="linkedin"
                          />
                        </span>{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/" className="m-auto">
          <img
            src="https://i.ibb.co/Y8CMrvd/isl-Logo-Desktop.png"
            width="200"
            height="50"
            className="img-fluid"
            alt="College Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="order-first"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="About us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#chairman" as={Link} to="/chairman">
                Chairman
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Administration" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#principal" as={Link} to="/principal">
                Principal
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#admissions" as={Link} to="/admissions">
                Admissions
              </NavDropdown.Item>
              <NavDropdown.Item href="#almanac" as={Link} to="/almanac">
                Almanac
              </NavDropdown.Item>
              <NavDropdown.Item href="#syllabus" as={Link} to="/syllabus">
                Syllabus
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Department" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#ce" as={Link} to="/department/ce">
                Civil Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#cse" as={Link} to="/department/cse">
                Computer Science & Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#ece" as={Link} to="/department/ece">
                Electronics & Communication Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#eee" as={Link} to="/department/eee">
                Electrical & Electronics Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#it" as={Link} to="/department/it">
                Information Technology
              </NavDropdown.Item>
              <NavDropdown.Item href="#me" as={Link} to="/department/me">
                Mechanical Engineering
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#mba" as={Link} to="/department/mba">
                Master of Business Administraion
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/events">
              <Nav.Link href="#blog">Events</Nav.Link>
            </Link>
            <Link to="/research">
              <Nav.Link href="#research">Research & Development</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar
