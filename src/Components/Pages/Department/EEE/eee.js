import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../EEE/components/Sidebar'
import Sidepost from '../EEE/components/Sidepost'
import Syllabus from '../EEE/components/Syllabus'
import Slide from '../EEE/components/Slide'
import TableP from './components/Table'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const eee = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Electrical & Electronics Engineering</title>
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
                <h4 className="title">Electrical & Electronics Engineering</h4>
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
                        Electrical & Electronics Engineering
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                      <p>Head of Department</p>
                      <h6 className="title">Mrs Asra Sultana</h6>
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
                        <a href="mailto:eee.hod@islec.edu.in">
                          eee.hod@islec.edu.in
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
                        Electrical engineering is a field of engineering that
                        generally deals with the study and application of
                        electricity, electronics, and electromagnetism. This
                        field first became an identifiable occupation in the
                        later half of the 19th century after commercialization
                        of the electric telegraph, the telephone, and electric
                        power distribution and use. Subsequently, broadcasting
                        and recording media made electronics part of daily life.
                        The invention of the transistor, and later the
                        integrated circuit, brought down the cost of electronics
                        to the point they can be used in almost any household
                        object.
                      </p>

                      <h4>Vision</h4>
                      <p>
                      To establish the department of Electrical and Electronics Engineering as a
center of excellence in academics and research,to produce Electrical and
Electronics engineering graduates with enhanced capabilities through
industry and acadamia collabration
                      </p>


                      <h4>Mission</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> MD 1: To enhance technical skills among the students by adopting effective
teaching-learning processes.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> MD 2: To produce world class electrical and electronics engineers by
imparting knowledge through state of art labs blended with practical
engineering skills.
                        </li>
                        <li>
                          <i className="fa fa-check"></i> MD 3: To inculcate and urge for life long learning ,adhering to professional
and ethical practices
                        </li>
                      </ul>
                      <h4>Program Educational Objectives (PEOs)</h4>
                      <p>
                        Electrical and Electronics Engineering is a broad
                        discipline that incorporates skills and expertise in the
                        areas which are essential to most sectors of industry.
                        Bachelors program in Electrical and Electronics
                        Engineering in the college is aimed at preparing
                        graduates who will
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>PEO 1 : 
                          Demonstrate technical competence in identifying,
                          formulating, analyzing, and creating engineering
                          solutions including multi disciplinary technical areas
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 2 : Continuously enhance
                          their skills through higher education or research to
                          emerge as competent technologist, educators or
                          professionals.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 3 : Advance in their
                          careers as successful professionals demonstrating
                          ethical and societal responsibilities.
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
                        <i className="fa fa-check"></i>PO 13 : Lifelong learning:
                        Recognize the need for, and have the preparation and
                        ability to engage in independent and life-long learning
                        in the broadest context of technological change.
                      </li>
                      <h4>Program Specific Outcomes</h4>
                      <li>
                        <i className="fa fa-check"></i>PSO 1 : Graduate will be able to
                        demonstrate an ability to analyze, design and provide an
                        engineering solution in the areas related to Electric
                        Drives/ Control and Power systems.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PSO 2 : Graduate will
                        demonstrate an ability to design, simulate and develop
                        electrical and electronic Products using Electronic
                        Design Automation (EDA) tools
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                  <object data="http://islec.edus.in/DATA/CO/eee.pdf" type="application/pdf" width={900} height={900}>
                    <p>View Course Outcome here  <a href="http://islec.edu.in/DATA/CO/eee.pdf">View PDF!</a></p>
                  </object> 
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
        <td>Mr.S.Md.Mazhar-Ul-Haq</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Mrs. Asra Sultana</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Mr. Mohd.Imran</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Mr. Sk.Khadar Basha</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Mrs. N.Sarawathi</td>
        <td>Asst.Prof</td>
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

export default eee
