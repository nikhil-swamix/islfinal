import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../CSE/components/Sidebar'
import Sidepost from '../CSE/components/Sidepost'
import Syllabus from '../DS/components/Syllabus'
import Slide from '../CSE/components/Slide'
import { Link } from 'react-router-dom'
import TableP from './components/Table'
import { Helmet } from 'react-helmet'

const cse = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Artificial Intelligence & Data Science</title>
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
                <h4 className="title">Artificial Intelligence & Data Science</h4>
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
                      Artificial Intelligence & Data Science
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                      <p>Head of Department</p>
                      {/* <h6 className="title">Dr. Mohammed Abdul Bari</h6> */}
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
                        <a href="mailto:cse.hod@islec.edu.in">
                          ads.hod@islec.edu.in
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
                    <Tab>Programme Outcomes</Tab>
                    <Tab>Course Outcomes</Tab>
                    <Tab>Syllabus</Tab>
                    <Tab>Publications</Tab>
                    <Tab>Faculty</Tab>
                    <Tab>Infrastructure</Tab>
                    <Tab>Department Events</Tab>
                    <Tab>Resources</Tab>
                    <Tab>*Student Clubs</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        B.E in  Artificial Learning and Data Science is an undergraduate program me offered by the Dept of Computer Science, with advanced learning solutions imparting knowledge of advanced innovations like machine learning, often called deep learning and artificial intelligence.
                      </p>
                      <p>
                        The department has strong link with local IT companies
                        with whom students can do projects training internship
                        and mentor-ship sessions various technical training
                        courses are held to equip students with latest trend.
                      </p>


                      <h4>Vision</h4>
                      <p>Strive to make the dept a center of excellence in artificial intelligence and
data science by producing world class engineers equipped with latest
technologies to build an eco system that will contribute knowledge to
society.</p>

                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To train the students in the state-of-the-art technologies of artificial
intelligence and data science.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To sensitize and bring awareness among the students to solve societal
issues through AI techniques by inculcating values and ethics.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To Enhance research, employability and entrepreneurial skills of students
in the field of AI & DS through project-based learning.
                        </li>
                      </ul>


                      <h4>Program Educational Objectives (PEOs)</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                          Graduate will solve real-time problems using analytical skills
acquired in the field of Artificial Intelligence and Data Science
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Graduate will embrace the professional code of ethics while
participating in projects that benefit society.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Graduates will innovate and adapt new technologies of AI & DS in
their chosen field of profession.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Graduate will have the capacity to engage in life-long learning by
pursuing higher education to augment career development
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <p>
                      At the end of the program the students (Engineering
                      Graduates) will be able to:
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-check"></i> Engineering knowledge:
                        Apply the knowledge of mathematics, science, engineering
                        fundamentals, and an engineering specialization to the
                        solution of complex engineering problems.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Problem analysis:
                        Identify, formulate, review research literature, and
                        analyse complex engineering problems reaching
                        substantiated conclusions using first principles of
                        mathematics, natural sciences, and engineering sciences.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Design/development of
                        solutions: Design solutions for complex engineering
                        problems and design system components or processes that
                        meet the specified needs with appropriate consideration
                        for the public health and safety, and the cultural,
                        societal, and environmental considerations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Conduct investigations
                        of complex problems: Use research-based knowledge and
                        research methods including design of experiments,
                        analysis and interpretation of data, and synthesis of
                        the information to provide valid conclusions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Modern tool usage:
                        Create, select, and apply appropriate techniques,
                        resources, and modern engineering and IT tools including
                        prediction and modelling to complex engineering
                        activities with an understanding of the limitations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> The engineer and
                        society: Apply reasoning informed by the contextual
                        knowledge to assess societal, health, safety, legal and
                        cultural issues and the consequent responsibilities
                        relevant to the professional engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Environment and
                        sustainability: Understand the impact of the
                        professional engineering solutions in societal and
                        environmental contexts, and demonstrate the knowledge
                        of, and need for sustainable development.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Ethics: Apply ethical
                        principles and commit to professional ethics and
                        responsibilities and norms of the engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Individual and team
                        work: Function effectively as an individual, and as a
                        member or leader in diverse teams, and in
                        multidisciplinary settings.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Communication:
                        Communicate effectively on complex engineering
                        activities with the engineering community and with
                        society at large, such as, being able to comprehend and
                        write effective reports and design documentation, make
                        effective presentations, and give and receive clear
                        instructions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Project management and
                        finance: Demonstrate knowledge and understanding of the
                        engineering and management principle and apply these to
                        one’s own work, as a member and leader in a team, to
                        manage projects and in multidisciplinary environments.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Lifelong learning:
                        Recognize the need for, and have the preparation and
                        ability to engage in independent and life-long learning
                        in the broadest context of technological change.
                      </li>
                      <h4>Program Specific Outcomes</h4>
                      <li>
                        <i className="fa fa-check"></i>Efficient coding: an
                        ability to analyse a problem, design the algorithm and
                        optimally code its solution.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Software deployment: an
                        ability to identify & define computing requirements to
                        test, implement and maintain a software product.
                      </li>
                    </ul>
                  </TabPanel>
                  
                  <TabPanel>
                    <div className="syll text-center">
                      <p>Course outcome</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                      <Syllabus />
                    </div>
                  </TabPanel>
                 

                  <TabPanel>
                    <div className="syll text-center">
                      <TableP />
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
        <td>Mr.Vaibhav Lall</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Mrs.Syeda Anjum Sultana</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Aleemuddin Syed</td>
        <td>Asst.Prof</td>
    </tr>
                    </Table>

                    </div>
                  </TabPanel>
                  

                  <TabPanel>
                    <div className="syll text-center">
                      <p>Infrastructure</p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
                      <p>Department Events</p>
                    </div>
                  </TabPanel>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Student Resources</h4>
                      <ul className='mt-30'>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='/#'> Academic Email usage Policy </a>
                        </li>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='https://internship.aicte-india.org/'> AICTE Internships  </a>
                        </li>
                        <li>
                          <i className="fa fa-angle-double-right"></i><a href='https://nptel.ac.in/domains'>  NPTEL Domain Certificate </a>
                        </li>

                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
                      <p>Student Clubs</p>
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
                <div className="text-right">
                  <a href="/events" className="pt-10 ">
                    More{' '}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default cse
