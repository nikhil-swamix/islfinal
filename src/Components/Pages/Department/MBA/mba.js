import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../MBA/components/Sidebar'
import Sidepost from '../MBA/components/Sidepost'
import Syllabus from '../MBA/components/Syllabus'
import Slide from '../MBA/components/Slide'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const mba = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Master of Business Administration</title>
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
                <h4 className="title">Master of Business Administration</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a href="#/">Department</a>
                    </li>
                    <li>
                      <a className="active" href="#/">
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
                        src="https://www.islec.edu.in/allimages/faculty/mbahodnov22.jpeg"
                        alt="author"
                      />
                    </div>
                    <div className="media_content media-body">
                      <h6 className="title">Dr. K. Padmaja</h6>
                      <p className="edu">M.Com, MBA, PGCCA, M.Phil, PhD</p>
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
                    <div className="media_content media-body">
                      <h6 className="title mt-2">
                        <a href="mailto:mba.hod@islec.edu.in">
                          mba@islec.edu.in
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

      <section className="course-details-area dept pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <Slide />
              <section className="dept-tabs mt-20">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Syllabus</Tab>
                    <Tab>Faculty</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify ">
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
                      <Syllabus />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                      <Table className='striped bordered hover'>
    <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Designation</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr.K.Padmaja</td>
        <td>Associate. Prof</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Dr.Md.Irfan Uddin</td>
        <td>AssociateProf</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Mr.Salman Ahmed</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Ms.Asma Khatoon</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Mrs.Ishrathjabbeen</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Mrs.Saba Tarannum</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Mr.Syed Abdul Razak Quadri</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Mr.Rameshbabu</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Mr.Naimatullah Hussaini</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Mr.Azam Khan</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Ms.Rakia Begum</td>
        <td>Asst Prof</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Ms.Afifa Naaz</td>
        <td>Asst. prof</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Mr.Rahamanessa Aalamudi</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Mr.Venkata Sai Prasad</td>
        <td>Asst.prof</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Ms.Kubra Fatima</td>
        <td>AsstProf</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Mr.Mohammed Khanith</td>
        <td>Asst Prof</td>
    </tr>
                      </Table>
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
