import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../IT/components/Sidebar'
import Sidepost from '../IT/components/Sidepost'
import Syllabus from '../IT/components/Syllabus'
import Slide from '../IT/components/Slide'

const it = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Information Technology</h4>
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
                        Information Technology
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
                      <h6 className="title">Samreen</h6>
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
                        <a href="https://islengg.ac.in">samreen@islec.edu.in</a>
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

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        Information technology (IT) is the application of
                        computers to store, study, retrieve, transmit, and
                        manipulate data,or information, often in the context of
                        a business or other enterprise. IT is considered a
                        subset of information and communications technology
                        (ICT).
                      </p>
                      <p>
                        It also encompasses other information distribution
                        technologies such as television and telephones. Several
                        industries are associated with information technology,
                        including computer hardware, software, electronics,
                        semiconductors, internet, telecom equipment, and
                        e-commerce.
                      </p>
                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To empower students
                          through knowledge and information. To meet the
                          challenges of a complex and modern society through
                          informed social outreach. To be one of the premier
                          institution in the field of Engineering and Technology
                          and to achieve excellence in teaching.
                        </li>
                      </ul>
                      <h4>Vision</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> The department aims to
                          being recognized as a promoter of computing
                          Technologies and their applications.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To produce competent
                          computer science professionals to the constantly
                          evolving IT sector.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> To create linkages
                          between industry and academy for better absorption in
                          job market.
                        </li>
                      </ul>
                      <h4>Program Educational Objectives (PEOs)</h4>
                      <p>
                        After 3 to 4 years of graduation, graduates of the
                        Information Technology program will:
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                          Apply knowledge of mathematics and Information
                          Technology to analyze, design and implement solutions
                          for real world problems in core or in
                          multidisciplinary areas.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Communicate
                          effectively, work in a team, practice professional
                          ethics and apply knowledge of computing technologies
                          for societal development.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Engage in Professional
                          development or postgraduate education to be a
                          life-long learner.
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
                        <i className="fa fa-check"></i> Hardware design: An
                        ability to analyze, design, simulate and implement
                        computer hardware / software and use basic
                        analog/digital circuits, VLSI design for various
                        computing and communication system applications.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Software design: An
                        ability to analyze a problem, design algorithm, identify
                        and define the computing requirements appropriate to its
                        solution and implement the same.
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
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

export default it
