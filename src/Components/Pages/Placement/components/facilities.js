import React from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const Rfacilities = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Research & Development</title>
        <meta name="description" content="Exam Timetable & Notifications" />

        <link rel="canonical" href="http://islec.edu.in/exambranch" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> Research & Development</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                      Research & Development /  Facilities  
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      {/* <img
                        className="authorExam"
                        src="https://i.ibb.co/RC8C8jx/raghavender-removebg-preview-1.jpg"
                        alt="author"
                      /> */}
                    </div>
                    <div className="media_content media-body">
                    <h6 className="title">Dr. Chndra Sekhar</h6>
                      <p>Dean R&D</p>
                      <p>M.TECH & PhD</p>
                    </div>
                  </div>
                  <div className="breadcrumb_media d-flex align-items-center mt-3">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://i.ibb.co/z7NLwF0/mail.png"
                        alt="mail"
                      />
                    </div>
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="mailto:tpo@islec.edu.in">
                          research@islec.edu.in
                        </a>
                      </h6>
                    </div>
                  </div>

                  <div className="breadcrumb_media d-flex align-items-center">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://i.ibb.co/jVpCRqM/mobile.png"
                        alt="mobile"
                      />
                    </div>
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="/#">
                          +919247476003
                        </a>
                      </h6>
                    </div>
                  </div>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-60 mb-60 placement">
        <Container>
          <Row>

          <Col md={4} className="sidebar academic">
              <Sidebar />
            </Col>


          <Col md={8}>
            <div className="title">
              <h4>Facilities</h4>
              <h5>The facilities at ISL Engineering College (ISLEC) include</h5>
            </div>

            <section className="dept-tabs mt-30">

<ul>
  <li>
   <i className="fa fa-check"></i> Well-equipped laboratory facilities in all departments prioritizing researchers, available for student research work.
  </li>
  <li>
     <i className="fa fa-check"></i> Access to other department laboratories for multidisciplinary research projects by faculty and students
  </li>

  <li>
    <i className="fa fa-check"></i>Procurement of  various latest software for research activities, aiding faculty and students in project development.
  </li>
  <li>
    <i className="fa fa-check"></i> Utilization of educational software to provide students with tools and resources for academic preparation and workforce readiness in infrastructure-related fields.
  </li>
  <li>
    <i className="fa fa-check"></i> Integration of software and tools in ISLEC Research Centre to enhance educational value and provide real-time job experiences for students.
  </li>
  <li>
    <i className="fa fa-check"></i> Provision of high-speed internet facility and computers for faculty and students
  </li>
  <li>
    <i className="fa fa-check"></i> Extensive library collection comprising books and e-books covering all aspects of engineering.
  </li>

</ul>

<h5>Resources at ISLEC</h5>
<h6>Industry Institute Interaction Cell (IIIC)</h6>

<ul>
  <li>
    <i className="fa fa-check"></i> ISLEC Research Centre
  </li>
  <li>
    <i className="fa fa-check"></i> Library & E-Library
  </li>
  <li>
    <i className="fa fa-check"></i> Computing to Support research
  </li>
  <li>
    <i className="fa fa-check"></i> Shared Resources – Labs
  </li>
  <li>
    <i className="fa fa-check"></i> Clubs like  Robotics Club etc.
  </li>
  <li>
    <i className="fa fa-check"></i> Communities and chapters like ISLEC IEEE etc.
  </li>

</ul>
            
            </section>


            <h6 className='mt-35 mb-15'>FACILITIES OF RESEARCH AND DEVELOPMENT CELL :</h6>

            <Row>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/fa1.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">R&D Cell</p>
                     </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/fa2.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Vision & Mission Board</p>
                     </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/fa3.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Conference Room</p>
                     </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="card mb-10">
                    <img className="card-img-top" src="https://islec.edu.in/allimages/research/fa4.jpg" alt="CardImage " />
                    <div className="card-body">
                      <p className="card-text">Entrepreneurship Development Cell</p>
                     </div>
                </div>
                </Col>
            </Row>


            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Rfacilities
