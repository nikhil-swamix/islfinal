import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../ME/components/Sidebar'
import Sidepost from '../ME/components/Sidepost'
import Syllabus from '../ME/components/Syllabus'
import Slide from '../ME/components/Slide'

const me = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Mechanical Engineering</h4>
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
                        Mechanical Engineering
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
                        <a href="https://islengg.ac.in">hod@islec.edu.in</a>
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
                    <Tab>Programme Outcomes</Tab>
                    <Tab>Syllabus</Tab>
                    <Tab>Labs</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify d-none d-sm-block">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        This department is forward looking department with
                        vision to produce theoretical sound and industry ready
                        engineers. As a part of industry orientation, we have
                        partnered with various major industries and institutes
                        for specialized modular training and certifications
                        courses. Mechanical engineering is the discipline that
                        applies the principles of Engineering Physics and
                        material science for the design analysis and factoring
                        and maintenance of mechanical system. Mechanical
                        Engineer also expected to understand and be able to
                        apply basic concepts from Chemistry, Physics, chemical
                        engineering. Introduction to CAE & CAD is given to the
                        students to understand the working in a commercial
                        establishment and multinational corporations.
                      </p>
                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To be employed as
                          practicing engineer in field such as design research
                          and development testing my fracturing operations and
                          service systems.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To offer certificate
                          programs in new software and high-end machinery.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To execute projects on
                          automobile, refrigeration systems, robotics and
                          manufacturing.
                        </li>
                      </ul>
                      <h4>Vision</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> Vision endeavors to be
                          recognized nationally for outstanding teaching
                          training and Technology.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To produce highly
                          innovative, conceptual strong mechanical engineers.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To create linkages
                          between industry and Academy of a better absorption in
                          job market.
                        </li>
                      </ul>
                      <h4>Program Educational Objectives (PEOs)</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                          Establish themselves as successful professionals while
                          working independently or in multidisciplinary teams
                          demonstrating professional, ethical and societal
                          responsibilities
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Have high levels of
                          technical competency and problem solving skills to
                          generate innovative solutions to engineering problems.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Continuously enhance
                          their skills through training, independent inquiry,
                          professional practices and / or pursuit of higher
                          education or research.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Advance in their
                          careers through increased technical and managerial
                          responsibility as well as attainment of leadership
                          positions.
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
                        <i className="fa fa-check"></i>Research Potential: Usage
                        of advanced software packages commonly used in industry
                        for modeling, assembly and to carry out multiphysics
                        analysis.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Competent areas: Design
                        and build components and systems related to mechanical
                        and allied disciplines, using various manufacturing
                        methods.
                      </li>
                    </ul>
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

export default me
