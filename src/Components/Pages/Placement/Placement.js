import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Table from './Table'
import Sidebar from './Sidebar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Slide from '../Placement/Slide'

const Exambranch = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Training & Placement</title>
        <meta name="description" content="Exam Timetable & Notifications" />

        <link rel="canonical" href="http://islec.edu.in/exambranch" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title"> Training & Placement</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#active">
                        Training & Placement
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
                    <h6 className="title">Buelah Sharon</h6>
                      <p>Training & Placement Officer</p>
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
                          tpo@islec.edu.in
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
                          +919182221317 / +919676544151
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

          <div className="tab-content tab-content-info text-justify ">
    
           <div className="">
             <h4>vision</h4>
             <ul>
                 <li>
                  To enhance the skills of students through rigorous training in all spheres aimed at making them employable and placed through campus recruitment.
                 </li>
              </ul>


             <h4>Mission</h4>
  
               <ul>
                 <li>
                   <i className="fa fa-check"></i> MD1 : To empower students through knowledge sharing and adapting to emerging technology.
                 </li>
                 <li>
                    <i className="fa fa-check"></i> MD2 : To equip students with cutting-edge tools for adapting to the demands of a global economy.
                 </li>
        
                 <li>
                   <i className="fa fa-check"></i> MD3 : To inculcate the urge for lifelong learning along with professional and ethical practices.
                 </li>
                </ul>
            </div>
          </div>

          <Row>
          <Col md={8}>
            <div className="title">
              <h4>Placement News</h4>
            </div>
              <Table />
            </Col>

            <Col md={4} className="sidebar academic">
              <Slide />
              <Sidebar />
            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Exambranch
