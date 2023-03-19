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

            <div className="col-xl-5 col-lg-6 col-md-6 col-12">
                <div className="header_left">
                  <ul className="header_ul">
                    <li>
                      <img src='https://www.islec.edu.in/allimages/OU.png' height={40} alt='logo' />
                    </li>
                    <li>
                      <img src='https://www.islec.edu.in/allimages/AICTE.png' height={40} alt='logo' />
                    </li>
                    <li>
                      <img src='https://www.islec.edu.in/allimages/MoE.png' height={40} alt='logo' />
                    </li>
                    <li>
                      <img src='https://www.iso.org/files/live/sites/isoorg/files/name_and_logo/iso%20logo%20registered%20trademark.gif' height={40} alt='logo' />
                    </li>
                    <li>
                      <img src='https://www.cssharmila.com/wp-content/uploads/2018/04/MSME.jpg' height={40} alt='logo' />
                    </li>
                    <li>
                      <img src='https://i.ibb.co/kK7CHC8/EE0v-CMf-VAAA-Lxj-removebg-preview.png' height={40} alt='logo' />
                    </li>
                    <li>
                      <img src='https://i.ibb.co/KVjJxD1/IEEE.png' height={40} alt='logo' />
                    </li>
                    {/* <li>
                      <img src='https://upload.wikimedia.org/wikipedia/en/e/e0/Csi_logo_india.jpg' height={40} alt='logo' />
                    </li> */}
                  </ul>
                </div>
              </div>


              <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                <div className="header_left mt-10 copyright social text-left">
                  <ul className="header_ul">
                      <li>
                      <a href="https://islec.edu.in/rti" rel="noopener">
                         RTI
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/approvals" rel="noopener">
                         Approvals
                      </a>
                    </li>

                    <li>
                      <a href="https://islec.edu.in/faculty" rel="noopener">
                         Staff List
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/committees" rel="noopener">
                         Committees
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/naac" rel="noopener">
                         <b>NAAC</b>
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/dvv" rel="noopener">
                         <b>DVV</b>
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/iqac" rel="noopener">
                         <b>IQAC</b>
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/nirf" rel="noopener">
                         <b>NIRF</b>
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/NAAC/feedback.pdf" rel="noopener">
                         <b>Feedback</b>
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in" rel="noopener">
                         Alumni
                      </a>
                    </li>
                    <li>
                      <a href="https://islec.edu.in/" rel="noopener">
                         Vision & Mission
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

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
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
            src="https://islec.edu.in/allimages/MainLogo.png"
            className="img-fluid"
            alt="College Logo"
            height={700}
            width={350}
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
              <NavDropdown.Item href="https://islec.edu.in/DATA/NAAC/7/7.2.1/7.2.1.Best_Practices.pdf">
                Best Practices
              </NavDropdown.Item>
              <NavDropdown.Item href="https://islec.edu.in/DATA/NAAC/7/7.3.1/7.3.1Distinctiveness.pdf">
                Distinctiveness
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Department" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#hs" as={Link} to="/department/hs">
                Humanities and Sciences
              </NavDropdown.Item>
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
              Infrastructure & Events
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