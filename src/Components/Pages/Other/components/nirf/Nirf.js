import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Nirf = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NIRF</title>
        <meta
          name="description"
          content="NIRF"
        />

        <link rel="canonical" href="http://islec.edu.in/nirf" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">National Institutional Ranking Framework</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                        NIRF
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
            <Col lg={6} md={6}>
             <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Overall</Tab>
                    <Tab>Engineering</Tab>
                    <Tab>Management</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'> Overall</h5>                      
                      <tr>
                        <th>Academic Year </th>
                        <th>View</th>
                      </tr>

                      <tr>
                      <td>NIRF'2023'</td>
                        <td>
                          <a href='https://islec.edu.in/NAAC/Overall2023.pdf'>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            </a>
                        </td>
                      </tr>
  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'> Engineering</h5>                      
                      <tr>
                        <th>Academic Year </th>
                        <th>View</th>
                      </tr>

                      <tr>
                      <td>NIRF'2023'</td>
                        <td>
                          <a href='https://islec.edu.in/NAAC/Engineering2023.pdf'>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            </a>
                        </td>
                      </tr>
  
                    </Table>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <Table striped bordered hover>
                      <h5 className='mt-3 mb-3 text-center'> Management</h5>                      
                      <tr>
                        <th>Academic Year </th>
                        <th>View</th>
                      </tr>

                      <tr>
                        <td>NIRF'2023'</td>
                        <td>
                          <a href='https://islec.edu.in/NAAC/Management2023.pdf'>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            </a>
                        </td>
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

export default Nirf