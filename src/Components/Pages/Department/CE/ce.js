import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../CE/components/Sidebar'
import Sidepost from '../CE/components/Sidepost'
import Syllabus from '../CE/components/Syllabus'
import Slide from '../CE/components/Slide'
import { Link } from 'react-router-dom'
import Table from './components/Table'
import { Helmet } from 'react-helmet'
const ce = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Civil Engineering</title>
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
                <h4 className="title">Civil Engineering</h4>
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
                        Civil Engineering
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
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
                    <Tab>Syllabus</Tab>
                    <Tab>Publications</Tab>
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="">
                      <h4>Course Description</h4>
                      <p>
                        Civil engineering is a professional engineering
                        discipline that deals with the design, construction, and
                        maintenance of the physical and naturally built
                        environment.The major focus of this department is on
                        providing theoretical and hands-on knowledge, so that
                        students acquire the skills and knowledge that is
                        necessary to work in large construction firms as well as
                        to start their own entrepreneur venture.Major focus
                        areas for industry orientation are Land surveying,
                        Computer aided Building Planning and design, Structural
                        design, Soil and Concrete testing. Our Fluid Mechanics
                        lab give a stiff competition to the best in the sector.
                      </p>

                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> To formulate and solve
                          civil engineering problems that need specified
                          performance cost time safety and other quality needs.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>To exposed students to
                          hands on lab experience with latest softwares.
                        </li>

                        <li>
                          <i className="fa fa-check"></i>To align students
                          conceptual knowledge to real time application there by
                          developing prototypes using cement coarse and fine
                          aggregates.
                        </li>
                      </ul>
                      <h4>Vision</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>Emerge as a Centre of
                          excellence in civil engineering providing best in
                          class facilities.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Foster on generation of
                          thinkers planners and executors.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Create linkages between
                          industry and academy for better absorption in job
                          market.
                        </li>
                      </ul>
                      <h4>Program Educational Objectives (PEOs)</h4>
                      <p>
                        Program educational objectives are broad statements that
                        describe the career and professional accomplishments
                        that the program is preparing the graduates to achieve.
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>A strong foundation in
                          mathematics, basic sciences and engineering
                          fundamentals, to successfully compete for entry-level
                          positions or pursue postgraduate programme in Civil
                          Engineering and related fields.{' '}
                        </li>
                        <li>
                          <i className="fa fa-check"></i>ontemporary Civil
                          Engineering professional skills, collection, analysis
                          / interpretation and presentation of data, including
                          hands-on laboratory experience, exposure to modern
                          software, creativity, and innovation to successfully
                          compete in the local, national and global market.{' '}
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Strong communication
                          and interpersonal skills, broad knowledge and an
                          understanding of multicultural and global perspectives
                          to work effectively in multidisciplinary teams, both
                          as team members and leaders.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Integral development
                          of the personality to deal with ethical and
                          professional issues, taking into account the broader
                          societal implications of civil engineering and also
                          develop independent and lifelong learning.
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
                        <i className="fa fa-check"></i>Engineering knowledge:
                        Apply the knowledge of mathematics, science, engineering
                        fundamentals, and an engineering specialization to the
                        solution of complex engineering problems.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Problem analysis:
                        Identify, formulate, review research literature, and
                        analyze complex engineering problems reaching
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
                        <i className="fa fa-check"></i>Conduct investigations of
                        complex problems: Use research-based knowledge and
                        research methods including design of experiments,
                        analysis and interpretation of data, and synthesis of
                        the information to provide valid conclusions.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Modern tool usage:
                        Create, select, and apply appropriate
                        techniques,resources,and modern engineering and IT tools
                        including prediction and model into complex engineering
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
                        <i className="fa fa-check"></i>PSO1: Plan, Analyze and
                        design various structural components for buildings,
                        Transportation elements, Water Resources Structures ,
                        Treatment plants, Geotechnical aspects, Geological
                        investigations using suitable approaches, latest
                        equipment and software.
                      </li>
                      <li>
                        <i className="fa fa-check"></i> PSO2: Exploration of
                        futuristic approaches in Civil Engineering for better
                        Industry compatibility.
                      </li>
                    </ul>
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

export default ce
