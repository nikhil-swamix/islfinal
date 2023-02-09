import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../ECE/components/Sidebar'
import Sidepost from '../ECE/components/Sidepost'
import Syllabus from '../ECE/components/Syllabus'
import Slide from '../ECE/components/Slide'
import Table from './components/Table'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ece = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Electronics & Communicate Engineering</title>
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
                <h4 className="title">
                  Electronics & Communication Engineering
                </h4>
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
                        Electronics & Communication Engineering
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                    <h6 className="title">Dr. Abdul Mateen Ahmed</h6>
                      <p>Head of Department</p>
                      <p className="edu">M.Tech, Ph.D</p>
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
                        <a href="mailto:ece.hod@islec.edu.in">
                          ece.hod@islec.edu.in
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
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        Electronics engineering, or Electronic & Communication
                        Engineering, is an Electrical Engineering discipline
                        which utilizes nonlinear and active electrical
                        components (such as semiconductor devices, especially
                        transistors, diodes and integrated circuits) to design
                        electronic circuits, devices, microprocessors,
                        microcontrollers and other systems. The discipline
                        typically also designs passive electrical components,
                        usually based on printed circuit boards.
                      </p>
                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To inculcate a spirit
                          of scientific temper and analytical thinking, and
                          train the students in contemporary technologies.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Establish a unique
                          learning environment to enable the students to face
                          the challenges of the outside world.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Enable students to
                          develop skills to solve complex technological problems
                          of current times.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To motivate, mould and
                          transform individuals to aspire bigger, work harder,
                          think smarter and contribute towards green
                          engineering.
                        </li>
                      </ul>
                      <h4>Vision</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To produce finest
                          Electronics & Communication Engineers in India.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To establish the
                          department of Electronics & Communication as centre of
                          excellence in research and training.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To create linkages
                          between industry and academia for enhanced
                          capabilities aimed at becoming multidisciplinary
                          entrepreneurship.
                        </li>
                      </ul>
                      <h4>Program Educational Objectives (PEOs)</h4>
                      <p>
                        Within the four to five years, our graduates passing out
                        of the department of Electronics & Communication
                        Engineering are expected to achieve:
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                          PEO 1 : Core competence : Graduates will be able to
                          provide engineering solutions with strong base of
                          science and mathematics, subject domain knowledge for
                          challenging problems in electronics and
                          multidisciplinary disciplines such as IoT, Robotics
                          and Mechatronics etc.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 2 : Career building:
                          Graduates will be able to fulfill professional and
                          social responsibilities effectively in all the
                          disciplines including teaching by synchronizing
                          theoretical and practical skills through our rigorous
                          yet love and logic approached teaching learning
                          methodologies.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 3 : Technical
                          proficiency : Graduates will be able to practice
                          analytical, creative and innovative skills in the
                          chosen area of education, research or industrial
                          development.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 4 : Managerial
                          Skills : Graduates will be able to manage future fast
                          communication and smart cities complex problems using
                          moral/ethical practice, managerial and entrepreneurial
                          skills for the welfare of country using green
                          engineering concepts.
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
                        <i className="fa fa-check"></i>PO 1 : Engineering knowledge:
                        Apply the knowledge of mathematics, science, engineering
                        fundamentals, and an engineering specialization to the
                        solution of complex engineering problems.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 2 : Problem analysis:
                        Identify, formulate, review research literature, and
                        analyse complex engineering problems reaching
                        substantiated conclusions using first principles of
                        mathematics, natural sciences, and engineering sciences.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 3 : Design/development of
                        solutions: Design solutions for complex engineering
                        problems and design system components or processes that
                        meet the specified needs with appropriate consideration
                        for the public health and safety, and the cultural,
                        societal, and environmental considerations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 4 : Conduct investigations
                        of complex problems: Use research-based knowledge and
                        research methods including design of experiments,
                        analysis and interpretation of data, and synthesis of
                        the information to provide valid conclusions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 5 : Modern tool usage:
                        Create, select, and apply appropriate techniques,
                        resources, and modern engineering and IT tools including
                        prediction and modelling to complex engineering
                        activities with an understanding of the limitations.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 6 : The engineer and
                        society: Apply reasoning informed by the contextual
                        knowledge to assess societal, health, safety, legal and
                        cultural issues and the consequent responsibilities
                        relevant to the professional engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 7 : Environment and
                        sustainability: Understand the impact of the
                        professional engineering solutions in societal and
                        environmental contexts, and demonstrate the knowledge
                        of, and need for sustainable development.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 8 : Ethics: Apply ethical
                        principles and commit to professional ethics and
                        responsibilities and norms of the engineering practice.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 9 : Individual and team
                        work: Function effectively as an individual, and as a
                        member or leader in diverse teams, and in
                        multidisciplinary settings.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 10 : Communication:
                        Communicate effectively on complex engineering
                        activities with the engineering community and with
                        society at large, such as, being able to comprehend and
                        write effective reports and design documentation, make
                        effective presentations, and give and receive clear
                        instructions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 11 : Project management and
                        finance: Demonstrate knowledge and understanding of the
                        engineering and management principle and apply these to
                        one’s own work, as a member and leader in a team, to
                        manage projects and in multidisciplinary environments.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PO 12 : Lifelong learning:
                        Recognize the need for, and have the preparation and
                        ability to engage in independent and life-long learning
                        in the broadest context of technological change.
                      </li>
                      <h4>Program Specific Outcomes</h4>
                      <li>
                        <i className="fa fa-check"></i>PSO 1 : To design and investigate
                        complex Electronics and communication systems for multi
                        disciplinary tasks.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PSO 2 : To use modern Electronic
                        Design Automation (EDA) tools and state of art softwares
                        to synthesize and implement Electronics and
                        Communication Systems.
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <p>Course Outcomes</p>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
                      <Syllabus />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
                      <Table />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
                      <p>Faculty</p>
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

export default ece
