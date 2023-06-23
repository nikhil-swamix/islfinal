import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Sidebar from '../ME/components/Sidebar'
import Sidepost from '../ME/components/Sidepost'
import Syllabus from '../ME/components/Syllabus'
import Slide from '../ME/components/Slide'
import TableP from './components/Table'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const me = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mechanical Engineering</title>
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
                <h4 className="title">Mechanical Engineering</h4>
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
                        Mechanical Engineering
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                    <h6 className="title">Srinivasulu </h6>
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
                        <a href="mailto:me.hod@islec.edu.in">
                          me.hod@islec.edu.in
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
                      Mechanical engineering is a discipline of engineering that encompasses the design, analysis, manufacturing, and maintenance of mechanical systems. It involves the application of principles from physics, materials science, and mathematics to create and operate machinery and mechanical systems that contribute to various industries.
                      </p>
                      <p>
                      Throughout the course of a mechanical engineering program, students will gain a strong foundation in core engineering principles and develop the necessary technical skills to solve real-world engineering problems. The curriculum typically includes a combination of theoretical coursework, laboratory experiments, and design projects to provide a well-rounded education.
                      </p>

                      <h4>Vision</h4>
                      <p>To establish the department of mechanical engineering as a centre of excellence in technology, training and research; to produce mechanical engineering graduates with enhanced capabilities through industry and academic collaboration to meet global demands.</p>



                      <h4>Mission</h4>
                      <ul>
                        <li>
                            <i className="fa fa-check"></i>  M1:-To enhance technical skill among the students by adopting effective teaching learning process.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>  M2:- To impart knowledge with state of art labs to excel in Research, Development, Testing, Operation and training.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>  M3:-To inculcate an urge for lifelong learning and adhering to professional and ethical practices.  
                        </li>

                      </ul>
                      
                      <h4>Program Educational Objectives (PEOs)</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>PEO 1 :
                          To Prepare students to excel in all Mechanical Engineering fields such as Design, Analysis, Multi-disciplinary areas to take up professional challenges throughout  the globe.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 2 : To provide students with clear concepts in the mechanical engineering fundamental to challenging projects with innovative and real time solutions.
                        </li>
                        <li>
                          <i className="fa fa-check"></i>PEO 3 : To Promote students awareness for Lifelong learning and to follow codes of professional practice, ethics.
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
                        <i className="fa fa-check"></i>PSO 1 : Professional Skills: An ability to understand the basic concepts in Mechanical Engineering and to Apply them to various areas ; production, thermal, designing etc.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>PSO 2 : Problem-Solving Skills: An ability to solve complex Mechanical Engineering Problems, using latest hardware and software tools, along with analytical skills to arrive cost effective and appropriate solutions.
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                  <TabPanel>
                  <object data="http://islec.edus.in/DATA/CO/me.pdf" type="application/pdf" width={900} height={900}>
                    <p>View Course Outcome here  <a href="http://islec.edu.in/DATA/CO/me.pdf">View PDF!</a></p>
                  </object> 
                  </TabPanel>
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
        <td>Dr Mohammed Masood</td>
        <td>Professor</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Dr.B.Srinivasulu</td>
        <td>Assoc. Prof.</td>
    </tr>
    <tr>
        <td>3</td>
        <td>K Srikanth Reddy</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Mr.Mohd.Attalique Rabbani</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Md Mohiuddin</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Midthur Abdul Salman Khan</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Md Bahauddin</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Md  Jaleel Ahmed</td>
        <td>Asst.Prof</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Mr.Mohammed Nayeem</td>
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

                  <TabPanel className="tab-content tab-content-info text-justify ">
                    <div className="">
                      <h4>Students Club</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check"></i> BIM
                        </li>
                        <li>
                          <i className="fa fa-check"></i>	AUTOMOBILE CLUB
                        </li>
                        <li>
                          <i className="fa fa-check"></i> AWS CLUB
                        </li>
                        <li>
                          <i className="fa fa-check"></i> SIEGER PRO KARTING CHAMPIONSHIP(SPKC)
                        </li>
                      </ul>
                    
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

export default me
