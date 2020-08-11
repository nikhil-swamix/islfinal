import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../MBA/components/Sidebar'
import Sidepost from '../MBA/components/Sidepost'
import Syllabus from '../MBA/components/Syllabus'
import Slide from '../MBA/components/Slide'

const mba = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Master of Business Administration</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="https://islengg.ac.in">
                        <i class="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">Department</a>
                    </li>
                    <li>
                      <a className="active" href="https://islengg.ac.in">
                        Master of Business Administration
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="author"
                        src="https://islengg.ac.in/gallery/image/profile-icon-png-898.png"
                        alt="author"
                      />
                    </div>
                    <div className="media_content media-body">
                      <p>Head of Department</p>
                      <h6 className="title">Hod Name </h6>
                    </div>
                  </div>
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://islengg.ac.in/gallery/image/mail.png"
                        alt="mail"
                      />
                    </div>
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="https://islengg.ac.in">@islec.edu.in</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="course-details-area pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <Slide />
              <section className="dept-tabs mt-20">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Syllabus</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify d-none d-sm-block">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        MBA is a comprehensive course in general management with
                        specialization in finance, marketing and human resource
                        management. The course is delivered through case study
                        and critical analysis method.Student are equipped with
                        highly in-depth knowledge of ideology and system
                        implementation at various organisations.Seminars on
                        stock market,business environment,investment
                        banking,economic condition in various sectors,marketing
                        trends etc., were conducted in the previous year. Soft
                        skills training and motivational courses for career
                        guidance play a crucial role.Classrooms are equipped
                        with LCD projectors and Internet.All major program are
                        strategically contributed by the student.
                      </p>
                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To equip the students
                          with conceptual knowledge of management sciences to
                          pursue business career.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To import high quality
                          corporate through through Peer-learning and team-
                          building.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To find tune students
                          analytical and critical thinking for curriculum
                          involving case studies, Role Plays, group discussion
                          and out-of-the box initiatives.
                        </li>
                      </ul>
                      <h4>Vision</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To offer best class
                          management education, search and training.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To produce managers
                          who can take initiative, accept head-on challenges and
                          execute with efficiency and effectiveness.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To create linkages
                          between industry and Academia of for better absorption
                          in job market.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
                      <h6>Subject wise B.E Syllabus & Previous Exam Papers</h6>
                      <Syllabus />
                    </div>
                  </TabPanel>
                </Tabs>
              </section>
            </Col>
            <Col lg={4} md={4} className="sidebar">
              <aside>
                <div className="sidebar-item category">
                  <div className="title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="sidebar-info">
                    <Sidebar />
                  </div>
                </div>

                <Sidepost />
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default mba
