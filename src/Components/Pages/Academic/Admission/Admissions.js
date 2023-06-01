import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Admissions = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admissions</title>
        <meta
          name="description"
          content="ISLEC is Approved by AICTE and Affiliated to Osmania University"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Admissions</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a href="#academics">Academics</a>
                    </li>
                    <li>
                      <a className="active" href="#admissions">
                        Admissions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={4} md={4} className="sidebar">
              <aside>
                <Sidebar />
              </aside>
            </Col>{' '}
            <Col lg={8}>
              <section className="course-details-info">
                <Tabs className="myClass">
                  <TabList>
                    <Tab>Bachelor Degree Courses </Tab>
                    <Tab>Master Degree Courses</Tab>
                  </TabList>
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="">
                      <div class="table-responsive">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Course</th>
                              <th>Intake</th>
                              <th>Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>B.E Civil Engineering</td>
                              <td>60</td>
                              <td>4 Years</td>
                            </tr>

                            <tr>
                              <td>B.E Computer Science Engineering</td>
                              <td>180</td>
                              <td>4 Years</td>
                            </tr>

                            <tr>
                              <td>B.E Electronics and Communication Engineering</td>
                              <td>30</td>
                              <td>4 Years</td>
                            </tr>

                            <tr>
                              <td>B.E ArtificiaI Intelligence & Data Science</td>
                              <td>120</td>
                              <td>4 Years</td>
                            </tr>

                            <tr>
                              <td>B.E Information Technology</td>
                              <td>90</td>
                              <td>4 Years</td>
                            </tr>

                            <tr>
                              <td>B.E Mechanical Engineering</td>
                              <td>60</td>
                              <td>4 Years</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="">
                      <div class="table-responsive">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Course</th>
                              <th>Intake</th>
                              <th>Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Master of Business Administration</td>
                              <td>120</td>
                              <td>2 Years</td>
                            </tr>
                            <tr>
                              <td>M.Tech CSE</td>
                              <td>18</td>
                              <td>2 Years</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
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

export default Admissions
