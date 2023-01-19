import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Naac = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NAAC</title>
        <meta
          name="description"
          content="NAAC"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">NAAC</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        NAAC
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
             <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Self Declaration</Tab>
                    <Tab>Undertaking</Tab><br></br>
                    <Tab>IQAC</Tab><br></br>
                    <Tab>Criterion 1</Tab>
                    <Tab>Criterion 2</Tab>
                    <Tab>Criterion 3</Tab>
                    <Tab>Criterion 4</Tab>
                    <Tab>Criterion 5</Tab>
                    <Tab>Criterion 6</Tab>
                    <Tab>Criterion 7</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Self Declaration</h4>
                      <ul>
                        <li>
                          <i className="fa fa-angle-double-right"></i> <a href='https://islec.edu.in/NAAC/SelfDeclaration.pdf'>
                           View Self Declaration 
                            </a>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Undertaking</h4>
                      <ul>
                        <li>
                          <i className="fa fa-angle-double-right"></i> <a href='https://islec.edu.in/NAAC/Undertaking.pdf'>
                           View Undertaking 
                            </a>
                        </li>
                      </ul>
                    </div>

                  </TabPanel>
                  <TabPanel>
                    <div className="syll">
                    <h4>About Internal Quality Assurance Cell (IQAC) </h4>                            
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 1 – Curricular Aspects</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                        <th></th>
                      </tr>

                      <tr>
                        <td>1.1 Curricular Planning and Implementation</td>
                        <td>Under Construction</td>
                      </tr>

                      <tr>
                        <td>1.2 Academic Flexibility</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>1.3 Curriculum Enrichment</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>1.4 Feedback System</td>
                        <td>Under Construction</td>
                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criteria 2- Teaching- Learning and Evaluation</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                        <th></th>
                      </tr>

                      <tr>
                        <td>2.1. Student Enrolment and Profile</td>
                        <td>Under Construction</td>
                      </tr>

                      <tr>
                        <td>2.2. Student Teacher Ratio</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>2.3. Teaching- Learning Process</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>2.4 Teacher Profile and Quality</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>2.5. Evaluation Process and Reforms</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>2.6 Student Performance and Learning Outcome</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>2.7 Student Satisfaction Survey</td>
                        <td>Under Construction</td>
                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>


                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criteria 3- Research, Innovations and Extension</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                        <th></th>
                      </tr>

                      <tr>
                        <td>3.1 Resource Mobilization for Research</td>
                        <td>Under Construction</td>
                      </tr>

                      <tr>
                        <td>3.2 Innovation Ecosystem</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>3.3 Research Publication and Award</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>3.5  Collaboration</td>
                        <td>Under Construction</td>
                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 4 - Infrastructure and Learning Resources</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                        <th></th>
                      </tr>

                      <tr>
                        <td>4.1 Physical Facilities</td>
                        <td>Under Construction</td>
                      </tr>

                      <tr>
                        <td>4.2 Library as a learning Resource</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>4.3 IT Infrastructure</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>4.4 Maintenance of Campus Infrastructure</td>
                        <td>Under Construction</td>
                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 5- Student Support and Progression</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                        <th></th>
                      </tr>

                      <tr>
                        <td>5.1 Student Support</td>
                        <td>Under Construction</td>
                      </tr>

                      <tr>
                        <td>5.2 Student Progression</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>5.3 Student Participation and Activities</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>5.4 Alumni Engagement</td>
                        <td>Under Construction</td>
                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 6- Governance, Leadership and Management</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                        <th></th>
                      </tr>

                      <tr>
                        <td>6.1 Institutional Vision and Leadership</td>
                        <td>Under Construction</td>
                      </tr>

                      <tr>
                        <td>6.2 Strategy Development and Deployment</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>6.3 Faculty Empowerment Strategies</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>6.4 Financial Management and Resource Mobilization</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>6.5 Internal Quality Assurance System</td>
                        <td>Under Construction</td>
                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll">
                    <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'>Criterion 7-Institutional Values and Best Practices</h5>                      
                      <tr>
                        <th>Key Indicators</th>
                        <th></th>
                      </tr>

                      <tr>
                        <td>7.1 Institutional Values and Social Responsibilities</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>7.2 Best Practices</td>
                        <td>Under Construction</td>
                      </tr>
                      <tr>
                        <td>7.3 Institutional Distinctiveness</td>
                        <td>Under Construction</td>
                      </tr>

  
                    </Table>
                    </div>
                  </TabPanel>

                </Tabs>
              </section>
            </Col>
            {/* <Col lg={4} md={4} className="sidebar">
              <aside>
                <div className="sidebar-item category">
                  <div className="title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="sidebar-info">
..                  </div>
                </div>

..                <div className="text-right">
                  <a href="/events" className="pt-10 ">
                    More{' '}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </aside>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Naac
