import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const Research = () => {
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
                      Research & Development
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
              <h4>Research & Development</h4>
            </div>

            <section className="dept-tabs mt-30">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>About</Tab>
                    <Tab>Functions</Tab>
                    <Tab>Objective</Tab>
                    
                  </TabList>


                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="tab-content tab-content-info text-justify justify">
                    <p><b>ISL Engineering College (ISLEC)</b> has established a Research and Development (R&D) cell to promote meaningful scientific industrial research activities. The vision and mission of the institution prioritize research in frontier technologies and various engineering disciplines.</p>
                    <p>Recognizing the dynamic nature of knowledge, especially in technical education, ISLEC acknowledges that a 'teaching-only' model is inadequate for ensuring quality education. To address this, faculty members are encouraged to engage in active research, thereby staying abreast of current developments in their respective fields. The R&D cell serves as a platform to foster research and innovative skills among both faculty and students.</p>
                    <p>To support research endeavors, ISLEC provides SEED funding for basic common research infrastructure, facilitating collaborative work. The R&D cell, comprising professors from various engineering programs, is responsible for overseeing research activities and ensuring efficient coordination within the institute</p>
                    <p>The organizational structure includes an Advisor, Principal, Dean, and Coordinators to facilitate the smooth functioning of the cell and promote overall growth.</p>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <p>The R&D cell at ISL Engineering College facilitates various functions</p>
                    <ul>
                      <li>
                       <i className="fa fa-check"></i>Assisting faculty, research scholars, and students in drafting research proposals for grants from funding agencies such as DST, AICTE, MHRD, etc.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Allocating funds for in-house R&D projects conducted by faculty, research scholars, and students.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Ensuring smooth functioning and effective management of R&D activities within the institution.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Providing a focal point within the institution to coordinate R&D activities across departments, faculty members, and research students
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Identifying potential projects and funding sources and communicating them to government and private funding agencies.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Identifying potential projects and funding sources and communicating them to government and private funding agencies.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Establishing collaborations with other universities, research centers, and industries, and informing government and private funding agencies about research and development projects.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Liaising with public and private sectors to identify R&D projects, including consultancy services, which could be undertaken at the institution on a payment basis.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Implementing, following up, and monitoring the progress of ongoing projects.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Assisting in matters related to collaborative research with other agencies.
                      </li>
                    </ul>

                  </TabPanel>


                  <TabPanel className="tab-content tab-content-info text-justify">
                    <p>The objectives of the R&D cell at ISL Engineering College include</p>
                    <ul>
                      <li>
                       <i className="fa fa-check"></i>Fostering scientific temper among faculty and students.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Generating innovative ideas to address academic and societal problems.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Encouraging, coordinating, and implementing research and development programs, including workshops, seminars, and trainings.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Creating awareness about evolving technologies and industrial standards for products
                       </li>
                      <li>
                       <i className="fa fa-check"></i>Providing opportunities for faculty and students to engage in consultancy projects focused on the latest evolving technologies and industry standards.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Identifying and informing researchers about research opportunities announced by academic, research, industry, or government organizations.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Encouraging and facilitating the publication of research work/projects in reputed academic journals and conferences
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Developing and implementing a research quality assurance mechanism to ensure that all research activities conform to standard quality specifications.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Establishing rules and regulations to ensure compliance with the research quality assurance framework and research code.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Encouraging core competence and consultancy work among faculty and students.
                      </li>
                      <li>
                       <i className="fa fa-check"></i>Creating awareness about filing patents and intellectual property rights (IPR).
                      </li>
                    </ul>

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

export default Research
