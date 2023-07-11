import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


const Dvv = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>IQAC</title>
        <meta
          name="description"
          content="IQAC"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">IQAC</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        IQAC
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                    <h6 className="title">K.Nanchari </h6>
                      <p>Head of Department</p>
                    </div>
                  </div>
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://i.ibb.co/z7NLwF0/mail.png"
                        alt="mail"
                      />
                    </div>
                    <div className="media_content media-body mt-2">
                      <h6 className="title">
                        <a href="mailto:ce.hod@islec.edu.in">
                          ce.hod@islec.edu.in
                        </a>{' '}
                      </h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="course-details-area dept  pb-60">
        <Container>
          <Row>
            <Col lg={12} md={12}>
            <div className='mt-5 text-right'>
                {/* <Button onClick={handleLogout} variant="danger">Logout</Button>{' '} */}
              </div>

             <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Vision & Mission</Tab>
                    <Tab>Roles and Responsibilities</Tab>
                    <Tab>OBE</Tab>
                    <Tab>Strategies</Tab>
                    <Tab>Audits</Tab>
                  </TabList>

                  
                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>IQAC COMPOSITION FOR THE YEAR 2022-2023</h5>                      
                     
                        
                      
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                        <h4>VISION</h4>
                            <p>
                                To ensure that quality standards are meet in all teaching and learning processes, fostering a culture of continuous improvement through institutionalizing and internalizing all the initiatives taken with internal and external support for the holistic development of the institute.
                            </p>

                        <h4>MISSION</h4>
                        <ul>
                          <li>
                            <i className="fa fa-check"></i> Promote quality teaching and learning enhancement through  internalization of quality culture and institutionalization of  best practices..
                          </li>
                          <li>
                            <i className="fa fa-check"></i> Establish a culture of continuous improvement through analysis of  regular feedbacks from stake holders.
                          </li>
                          <li>
                            <i className="fa fa-check"></i> Upgrade the quality of faculty, students through regular audits in stages throughout the academic year adhering to professional and ethical practices.  
                          </li>

                        </ul>
    
                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                        <h4 className='mt-50'>Quality Assurance Mechanism</h4>
                            <p>
                            The roles and responsibilities of IQAC typically include the following:                            </p>

                        <ul>
                          <li>
                            <i className="fa fa-check"></i> 1.	Development and implementation of quality benchmarks.                      
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 2.	Planning and coordination of quality assurance activities (Audits).             
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 3.	Monitoring and evaluation.                         
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 4.	Conducting feedback mechanisms.                        
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 5.	Documentation and reporting.                       
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 6.	Capacity building and professional development.    
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 7.	Accreditation and quality assessment                 
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 8.	Collaboration and networking.                        
                          </li>
                          <li>
                            <i className="fa fa-check"></i> 9.	Overall quality enhancement.                        
                          </li>

                        </ul>
    
                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div >

                      <Row>
                      <h4 className='mt-50'>OBE</h4>
                        <Col md={6}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/iqac/obe1.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>

                        <Col md={6}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/iqac/obe2.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                        <Col md={6}>
                        <div className="card mb-10">
                          <img className="card-img-top" src="https://islec.edu.in/docs/iqac/obe3.jpg" alt="CardImage " />
                            {/* <div className="card-body">
                              <h6 className="card-title">Computer Lab</h6>
                            </div> */}
                        </div>
                        </Col>
                  
                      </Row>
                   
                    </div>
                  </TabPanel>


      


                </Tabs>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dvv