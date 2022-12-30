import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TopAlert from '../../Pages/Home/TopAlert'

const NavigationBar = () => {
  return (
    <>
      <TopAlert />
      <header>
        <div className="header-top">
   
          <Container fluid>
            <div className="row mt-2">
              <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                <div className="header_left">
                  <ul className="header_ul">
                    {/* <li>
                      <img src='https://www.iso.org/files/live/sites/isoorg/files/name_and_logo/iso%20logo%20registered%20trademark.gif' height={40} alt='logo' />
                    </li>" " */}
                    <li>
                      <img src='https://www.islec.edu.in/allimages/iic.png' height={40} alt='logo' />
                    </li>
                    <li>
                      <img src='https://www.islec.edu.in/allimages/temp.png' height={40} alt='logo' />
                    </li>
                      <li>
                      <a href="https://islec.edu.in/rti" rel="noopener">
                         RTI
                      </a>
                    </li>

                    <li>
                      <a href="https://islec.edu.in/faculty" rel="noopener">
                         Faculty List
                      </a>
                    </li>

                    <li>
                      <a href="mailto:info@islec.edu.in">
                        <span className="fa fa-envelope"></span>{' '}
                        info@islec.edu.in
                      </a>
                    </li>
                    <li>
                    <a href="mailto:careers@islec.edu.in">
                       <span className="fa fa-envelope"></span>{' '}
                        careers@islec.edu.in
                      </a>
                    </li>
                    {/* <li>
                      <Link href="#contact" >
                        Contact - 9985958422, 8686300801, 9989405490
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="header_right text-center mt-10 copyright social text-md-right">
                  <ul className="header_ul">
                    <li>
                      <a href="https://islengg.ac.in#">
                        EAMCET, ECET & ICET Code : <b>ISLC</b>
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
            src="https://i.ibb.co/VwX0qt4/312-x-35.png"
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
              <NavDropdown.Item href="#syllabus" as={Link} to="/syllabus">
                Syllabus
              </NavDropdown.Item>
              <NavDropdown.Item href="#library" as={Link} to="/library">
                Library
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Department" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#ce" as={Link} to="/department/ce">
                Civil Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#cse" as={Link} to="/department/cse">
                Computer Science & Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#ds" as={Link} to="/department/ds">
                Artificial Intelligence & Data Science

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
              <NavDropdown.Item href="#mcse" as={Link} to="/department/mcse">
                M.Tech CSE
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#events" as={Link} to="/events">
              Events
            </Nav.Link>

            <Nav.Link href="#Research" as={Link} to="/research">
              R & D
            </Nav.Link>

            <Nav.Link href="#exambranch" as={Link} to="/exambranch">
              Exam Branch
            </Nav.Link>
            <Nav.Link href="#placement" as={Link} to="/placement">
              Training & Placement
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar
